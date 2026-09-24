/* Importacao inicial do catalogo publico para o Supabase. */
(function configureCatalogImport() {
  const button = document.getElementById("importCatalog");
  const client = window.supabaseClient;
  const catalog = window.FLOS_PRODUCTS || [];
  const toast = message => {
    const element = document.getElementById("toast");
    element.textContent = message;
    element.classList.add("show");
    setTimeout(() => element.classList.remove("show"), 3500);
  };

  if (!button) return;

  button.addEventListener("click", async () => {
    if (!client || !catalog.length) {
      toast("Supabase ou catalogo indisponivel.");
      return;
    }

    button.disabled = true;
    button.textContent = "Importando...";

    try {
      const categoryNames = [...new Set(catalog.map(product => product.nome.toLowerCase().includes("camiseta") ? "Camisetas" : "Pijamas"))];
      const { data: categories, error: categoryError } = await client
        .from("categories")
        .upsert(categoryNames.map(name => ({ name })), { onConflict: "name" })
        .select("id,name");
      if (categoryError) throw categoryError;

      const categoryIds = Object.fromEntries(categories.map(category => [category.name, category.id]));
      const products = catalog.map(product => ({
        id: product.id,
        name: product.nome,
        description: product.descricao,
        image: product.imagem,
        link: product.link,
        category_id: categoryIds[product.nome.toLowerCase().includes("camiseta") ? "Camisetas" : "Pijamas"]
      }));
      const { error: productError } = await client
        .from("products")
        .upsert(products, { onConflict: "id" });
      if (productError) throw productError;

      const sizes = catalog.flatMap(product => product.tamanhos.map(size => ({
        product_id: product.id,
        size,
        stock: 0
      })));
      const { error: sizeError } = await client
        .from("product_sizes")
        .upsert(sizes, { onConflict: "product_id,size", ignoreDuplicates: true });
      if (sizeError) throw sizeError;

      toast(`${catalog.length} produtos importados com sucesso.`);
      window.dispatchEvent(new CustomEvent("flos-catalog-imported"));
    } catch (error) {
      console.error(error);
      toast(`Erro na importacao: ${error.message}`);
    } finally {
      button.disabled = false;
      button.textContent = "Importar catalogo";
    }
  });
})();
