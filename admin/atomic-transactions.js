/* Operacoes criticas usam RPC atomica no Supabase para suportar varios usuarios. */
(function configureAtomicTransactions() {
  const client = window.supabaseClient;
  const storageKey = "flos-admin-state-v1";
  const getState = () => JSON.parse(localStorage.getItem(storageKey));
  const saveState = state => { localStorage.setItem(storageKey, JSON.stringify(state)); };
  const product = (state, id) => state.products.find(item => String(item.id) === String(id));
  const toast = message => { const element = document.getElementById("toast"); element.textContent = message; element.classList.add("show"); setTimeout(() => element.classList.remove("show"), 3000); };
  const close = () => { const modal = document.getElementById("modal"); modal.hidden = true; modal.innerHTML = ""; };
  const uuid = () => crypto.randomUUID();

  document.addEventListener("submit", async event => {
    const form = event.target;
    if (!(form.id === "fixStockForm" || form.id === "fixSaleForm")) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!client) { toast("Supabase indisponivel."); return; }
    const button = form.querySelector("button.btn-primary");
    button.disabled = true;
    button.textContent = "Salvando...";
    const data = new FormData(form);
    try {
      if (form.id === "fixStockForm") {
        const productId = Number(data.get("product"));
        const quantity = Number(data.get("quantity"));
        const cost = Number(data.get("cost"));
        const result = await client.rpc("register_stock_entry", { p_product_id: productId, p_size: data.get("size"), p_quantity: quantity, p_cost: cost, p_note: data.get("note") || null });
        if (result.error) throw result.error;
        const state = getState();
        const selected = product(state, productId);
        selected.sizes[data.get("size")] = result.data.stock;
        selected.cost = cost;
        saveState(state); close(); toast("Entrada salva no banco com sucesso.");
      } else {
        const productId = Number(data.get("product"));
        const selected = product(getState(), productId);
        const size = data.get("size");
        const quantity = Number(data.get("quantity"));
        const unitPrice = Number(data.get("unitPrice"));
        const rpcResult = await client.rpc("register_sale", { p_payment_method: data.get("payment"), p_discount: Number(data.get("discount") || 0), p_note: data.get("note") || null, p_items: [{ product_id: productId, size, quantity, unit_price: unitPrice }] });
        if (rpcResult.error) throw rpcResult.error;
        const result = rpcResult.data;
        const state = getState();
        const localProduct = product(state, productId);
        localProduct.sizes[size] = Math.max(0, Number(localProduct.sizes[size] || 0) - quantity);
        const sale = { id: result.id, number: `#${result.number}`, date: new Date().toISOString(), items: [{ id: uuid(), productId, name: selected.nome, size, quantity, unitPrice, cost: Number(selected.cost || 0) }], discount: Number(data.get("discount") || 0), total: Number(result.total || 0), payment: data.get("payment"), note: data.get("note"), status: "CONCLUIDA" };
        state.sales.unshift(sale);
        state.movements.unshift({ id: uuid(), date: sale.date, productId, size, type: "SAIDA", quantity, note: `Venda ${sale.number}`, user: "Admin" });
        saveState(state); close(); toast("Venda salva no banco com estoque atualizado.");
      }
      window.dispatchEvent(new Event("flos-auth-ready"));
    } catch (error) {
      console.error(error);
      toast(`Nao foi possivel salvar: ${error.message}`);
      button.disabled = false;
      button.textContent = form.id === "fixStockForm" ? "Registrar entrada" : "Finalizar venda";
    }
  }, true);

  document.addEventListener("click", async event => {
    const button = event.target.closest("[data-cancel]");
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!client) return toast("Supabase indisponivel.");
    const saleId = button.dataset.cancel;
    if (!confirm("Cancelar esta venda? O estoque sera devolvido pelo banco.")) return;
    button.disabled = true;
    const result = await client.rpc("cancel_sale", { p_sale_id: saleId });
    if (result.error) { button.disabled = false; toast(`Nao foi possivel cancelar: ${result.error.message}`); return; }
    const state = getState();
    const sale = state.sales.find(item => item.id === saleId);
    if (sale) {
      sale.status = "CANCELADA";
      sale.items.forEach(item => { const selected = product(state, item.productId); selected.sizes[item.size] = Number(selected.sizes[item.size] || 0) + item.quantity; });
      saveState(state);
    }
    toast("Venda cancelada e estoque devolvido pelo banco.");
    window.dispatchEvent(new Event("flos-auth-ready"));
  }, true);
})();
