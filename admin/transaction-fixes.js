/* Ajustes de entrada, venda e cancelamento enquanto o painel migra para o banco. */
(function configureTransactionFixes() {
  const storageKey = "flos-admin-state-v1";
  const modal = document.getElementById("modal");
  const app = document.getElementById("app");
  const money = value => Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  const getState = () => JSON.parse(localStorage.getItem(storageKey));
  const saveState = state => { localStorage.setItem(storageKey, JSON.stringify(state)); void window.syncFlosState?.(state); };
  const product = (state, id) => state.products.find(item => String(item.id) === String(id));
  const close = () => { modal.hidden = true; modal.innerHTML = ""; };
  const toast = message => { const element = document.getElementById("toast"); element.textContent = message; element.classList.add("show"); setTimeout(() => element.classList.remove("show"), 3000); };
  const newId = () => crypto.randomUUID();

  function openStockEntry() {
    const state = getState();
    modal.innerHTML = `<div class="modal"><div class="modal-head"><h2>Entrada de mercadoria</h2><button class="modal-close" data-fix-close>&times;</button></div><form id="fixStockForm" class="form-grid"><div class="field full"><label>Produto</label><select name="product" required>${state.products.map(item => `<option value="${item.id}">${escapeHtml(item.nome)}</option>`).join("")}</select></div><div class="field"><label>Tamanho</label><select name="size" required></select></div><div class="field"><label>Quantidade</label><input name="quantity" type="number" min="1" required></div><div class="field"><label>Preco de custo desta entrada</label><input name="cost" type="number" min="0" step="0.01" value="0" required></div><div class="field full"><label>Observacao</label><textarea name="note"></textarea></div><div class="modal-actions field full"><button type="button" class="btn btn-ghost" data-fix-close>Cancelar</button><button class="btn btn-primary">Registrar entrada</button></div></form></div>`;
    modal.hidden = false;
    const form = document.getElementById("fixStockForm");
    const productSelect = form.elements.product;
    const updateSizes = () => { const selected = product(state, productSelect.value); form.elements.size.innerHTML = selected.tamanhos.map(size => `<option>${escapeHtml(size)}</option>`).join(""); };
    productSelect.onchange = updateSizes;
    updateSizes();
    form.onsubmit = event => {
      event.preventDefault();
      const data = new FormData(form);
      const selected = product(state, data.get("product"));
      const size = data.get("size");
      const quantity = Number(data.get("quantity"));
      const cost = Number(data.get("cost"));
      selected.sizes[size] = Number(selected.sizes[size] || 0) + quantity;
      selected.cost = cost;
      state.movements.unshift({ id: newId("mov"), date: new Date().toISOString(), productId: selected.id, size, type: "ENTRADA", quantity, cost, note: data.get("note"), user: "Admin" });
      saveState(state); close(); toast(`Entrada registrada: ${quantity} unidade(s) a ${money(cost)} de custo.`);
      if (document.querySelector("[data-view].active")?.dataset.view === "stock") window.dispatchEvent(new Event("flos-auth-ready"));
    };
    modal.querySelectorAll("[data-fix-close]").forEach(button => button.onclick = close);
  }

  function openSaleEntry() {
    const state = getState();
    modal.innerHTML = `<div class="modal"><div class="modal-head"><h2>Nova venda</h2><button class="modal-close" data-fix-close>&times;</button></div><form id="fixSaleForm" class="form-grid"><div class="field full"><label>Produto</label><select name="product" required>${state.products.map(item => `<option value="${item.id}">${escapeHtml(item.nome)}</option>`).join("")}</select></div><div class="field"><label>Tamanho</label><select name="size" required></select></div><div class="field"><label>Quantidade</label><input name="quantity" type="number" min="1" required></div><div class="field"><label>Valor pago por unidade</label><input name="unitPrice" type="number" min="0" step="0.01" value="0" required></div><div class="field"><label>Desconto</label><input name="discount" type="number" min="0" step="0.01" value="0"></div><div class="field"><label>Pagamento</label><select name="payment"><option>PIX</option><option>Dinheiro</option><option>Cartao de debito</option><option>Cartao de credito</option><option>Outro</option></select></div><div class="field full"><label>Observacao</label><textarea name="note"></textarea></div><div class="modal-actions field full"><button type="button" class="btn btn-ghost" data-fix-close>Cancelar</button><button class="btn btn-primary">Finalizar venda</button></div></form></div>`;
    modal.hidden = false;
    const form = document.getElementById("fixSaleForm");
    const productSelect = form.elements.product;
    const updateSizes = () => { const selected = product(state, productSelect.value); form.elements.size.innerHTML = selected.tamanhos.map(size => `<option value="${escapeHtml(size)}">${escapeHtml(size)} (${selected.sizes[size] || 0} disponiveis)</option>`).join(""); form.elements.unitPrice.value = selected.price || 0; };
    productSelect.onchange = updateSizes;
    updateSizes();
    form.onsubmit = event => {
      event.preventDefault();
      const data = new FormData(form);
      const selected = product(state, data.get("product"));
      const size = data.get("size");
      const quantity = Number(data.get("quantity"));
      const unitPrice = Number(data.get("unitPrice"));
      const discount = Number(data.get("discount") || 0);
      const available = Number(selected.sizes[size] || 0);
      if (quantity > available) { toast(`Estoque insuficiente. Disponivel: ${available}.`); return; }
      const sale = { id: newId("sale"), number: `#${1001 + state.sales.length}`, date: new Date().toISOString(), items: [{ productId: selected.id, name: selected.nome, size, quantity, unitPrice, cost: Number(selected.cost || 0) }], discount, total: Math.max(0, unitPrice * quantity - discount), payment: data.get("payment"), note: data.get("note"), status: "CONCLUIDA" };
      selected.sizes[size] -= quantity;
      state.sales.unshift(sale);
      state.movements.unshift({ id: newId("mov"), date: sale.date, productId: selected.id, size, type: "SAIDA", quantity, note: `Venda ${sale.number}`, user: "Admin" });
      saveState(state); close(); toast(`Venda ${sale.number} registrada por ${money(sale.total)}.`); window.dispatchEvent(new Event("flos-auth-ready"));
    };
    modal.querySelectorAll("[data-fix-close]").forEach(button => button.onclick = close);
  }

  document.addEventListener("click", event => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.id === "stockEntry") { event.preventDefault(); event.stopImmediatePropagation(); openStockEntry(); }
    if (target.id === "newSale") { event.preventDefault(); event.stopImmediatePropagation(); openSaleEntry(); }
    const cancelButton = target.closest("[data-cancel]");
    if (cancelButton) {
      event.preventDefault(); event.stopImmediatePropagation();
      const state = getState();
      const sale = state.sales.find(item => item.id === cancelButton.dataset.cancel);
      if (!sale || !confirm(`Cancelar a venda ${sale.number}? O estoque sera devolvido.`)) return;
      sale.status = "CANCELADA";
      sale.items.forEach(item => { const selected = product(state, item.productId); selected.sizes[item.size] = Number(selected.sizes[item.size] || 0) + item.quantity; state.movements.unshift({ id: newId("mov"), date: new Date().toISOString(), productId: selected.id, size: item.size, type: "ENTRADA", quantity: item.quantity, note: `Cancelamento ${sale.number}`, user: "Admin" }); });
      saveState(state); toast("Venda cancelada e estoque devolvido."); window.dispatchEvent(new Event("flos-auth-ready"));
    }
  }, true);
})();
