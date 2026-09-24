/* =====================================================
   FLOS PIJAMAS — script.js
   =====================================================
   Para adicionar, remover ou editar um produto, basta
   alterar o array "produtos" abaixo. Cada objeto controla
  um card inteiro (imagem, nome, descrição e
   tamanhos disponíveis).
   ===================================================== */

const produtos = [
  {
    id: 1,
    Preco: "R$ 99,90",
    nome: "Pijama rosa com Preto Listrado",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/RosaPretoListrado.png",
    tamanhos: ["PP", "P", "10"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20azul%20masculino"
  },
  {
    id: 2,
    Preco: "R$ 0,00",
    nome: "Pijama Listrado Colorido",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/ColoridoListrado.png",
    tamanhos: ["PP", "M", "10"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20coracao%20feminino"
  },
  {
    id: 3,
    Preco: "R$ 0,00",
    nome: "Pijama Verde Quadriculado",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/VerdeQuadriculado.png",
    tamanhos: ["PP","GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20vermelho%20confort"
  },
  {
    id: 4,
    Preco: "R$ 0,00",
    nome: "Pijama Lilas Liso Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/LilasLiso.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20elegance"
  },
  {
    id: 5,
    Preco: "R$ 0,00",
    nome: "Pijama Lilas Liso - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/LilasLiso.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20elegance"
  },
  {
    id: 6,
    Preco: "R$ 0,00",
    nome: "Pijama Azul com Vermelho Bolinhas - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulVermelho.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20classic"
  },
  {
    id: 7,
    Preco: "R$ 0,00",
     nome: "Pijama Azul com Vermelho Bolinhas - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulVermelho.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20classic"
  },
  {
    id: 8,
    Preco: "R$ 0,00",
    nome: "Pijama Verde com Bolinhas - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/VerdeBolinhas.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 9,
    Preco: "R$ 0,00",
    nome: "Pijama Preto  com Bolinhas - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PretoBolinhas.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 10,
    Preco: "R$ 0,00",
    nome: "Pijama Preto  com Bolinhas - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PretoBolinhas.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 11,
    Preco: "R$ 0,00",
    nome: "Pijama Azul com Bolinhas",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulBolinhas.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 12,
    Preco: "R$ 0,00",
    nome: "Pijama Pink com Azul - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PinkAzul.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
   {
    id: 13,
    Preco: "R$ 0,00",
    nome: "Pijama Pink com Azul - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PinkAzul.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 14,
    Preco: "R$ 0,00",
    nome: "Pijama Vinho - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/Vinho.png",
    tamanhos: ["G","GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 15,
    Preco: "R$ 0,00",
    nome: "Pijama Branco com Estampa de Boca",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoBoca.png",
    tamanhos: ["PP"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
    {
    id: 16,
      Preco: "R$ 0,00",
    nome: "Pijama Branco com Estampa de Onça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoOnça.png",
  tamanhos: ["M", "GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
   {
    id: 17,
    Preco: "R$ 0,00",
    nome: "Camisola Branca Quadriculada",
    descricao: "Camisola confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/CamisolaBrancoQuadriculado.png",
  tamanhos: ["PP"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 18,
    Preco: "R$ 0,00",
    nome: "Camisola Azul Quadriculada",
    descricao: "Camisola confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/CamisolaAzulQuadriculado.png",
  tamanhos: ["P", "M"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 19,
    Preco: "R$ 0,00",
    nome: "Pijama Branco Florido",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancaFlores.png",
  tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 20,
    Preco: "R$ 0,00",
    nome: "Pijama Branco com Azul - Masculino",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoAzulBolso.png",
  tamanhos: ["GG","P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 21,
    Preco: "R$ 0,00",
    nome: "Pijama Azul Feminino",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulFem.png",
  tamanhos: ["GG","G","M","PP"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
   {
    id: 22,
    Preco: "R$ 0,00",
    nome: "Pijama Branco com Bolso Azul - Masculino",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoBolso.png",
  tamanhos: ["GG","M","P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 23,
    Preco: "R$ 0,00",
    nome: "Pijama Branco com Rosa Estampa de Olhos",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoRosaOlho.png",
  tamanhos: ["G"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
   {
    id: 24,
    Preco: "R$ 0,00",
    nome: "Pijama Branco Liso",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoLiso.png",
  tamanhos: ["PP","M","GG","P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 25,
    Preco: "R$ 0,00",
    nome: "Pijama Rosa Quadriculado",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/RosaQuadriculado.png",
  tamanhos: ["M"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 26,
    Preco: "R$ 0,00",
    nome: "Pijama Azul Ondulado",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulOndulado.png",
  tamanhos: ["PP","10"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 27,
    Preco: "R$ 0,00",
    nome: "Pijama Preto com Vermelho Masculino",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PretoVermelhoMasc.png",
  tamanhos: ["P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 28,
    Preco: "R$ 0,00",
    nome: "Pijama Preto com Vermelho Feminino",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PretoVermelhoFem.png",
  tamanhos: ["PP"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
   {
    id: 29,
    Preco: "R$ 0,00",
    nome: "Pijama Branco com Preto estampa de Bolinhas",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoPretoBolinha.png",
  tamanhos: ["GG", "M"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 30,
    Preco: "R$ 0,00",
    nome: "Pijama Rosa Liso",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/RosaLiso.png",
  tamanhos: ["GG", "P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 31,
    Preco: "R$ 0,00",
    nome: "Pijama Rosa Tie-Dye - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/RosaTie-dye.png",
  tamanhos: ["PP", "P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 32,
    Preco: "R$ 0,00",
    nome: "Pijama Rosa Tie-Dye - Manga Curta + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/RosaTie-dye.png",
  tamanhos: ["PP", "P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 33,
    Preco: "R$ 0,00",
    nome: "Pijama verde com estampa de coração - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/VerdeCoração.png",
  tamanhos: ["GG", "P", "M"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 34,
    Preco: "R$ 0,00",
    nome: "Pijama verde com estampa de coração - Manga Curta + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/VerdeCoração.png",
  tamanhos: ["GG", "P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 35,
    Preco: "R$ 0,00",
    nome: "Pijama Azul com estampa de coração - Manga Curta + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulCoração.png",
  tamanhos: ["GG", "P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 36,
    Preco: "R$ 0,00",
    nome: "Pijama Azul com estampa de coração - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulCoração.png",
  tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 37,
    Preco: "R$ 0,00",
    nome: "Pijama Azul Claro com estampa de bolinha",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulClaroBolinhas.png",
  tamanhos: ["PP", "G", "M", "P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 38,
    Preco: "R$ 0,00",
    nome: "Pijama Branco com estampa de coração - Manga Curta + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoCoração.png",
  tamanhos: ["GG", "G"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 39,
    Preco: "R$ 0,00",
    nome: "Pijama Branco com estampa de coração - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoCoração.png",
  tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 40,
    Preco: "R$ 0,00",
    nome: "Pijama Branco com estampa de coração Vermelho",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoCoraçãoVermelho.png",
  tamanhos: ["PP", "G", "M", "P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 41,
    Preco: "R$ 0,00",
    nome: "Pijama Marrom com estampa de onça - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/MarromOnça.png",
  tamanhos: ["PP","P"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 42,
    Preco: "R$ 0,00",
    nome: "Pijama Marrom com estampa de onça - Manga Longa + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/MarromOnça.png",
  tamanhos: ["PP","10"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 43,
    Preco: "R$ 0,00",
    nome: "Camiseta Branca",
    descricao: "Camiseta confortável e elegante, produzida com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/CamisetaBranca.png",
  tamanhos: ["P","M","GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 44,
    Preco: "R$ 0,00",
    nome: "Camiseta Azul",
    descricao: "Camiseta confortável e elegante, produzida com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/CamisetaAzul.png",
  tamanhos: ["P","M","GG","G"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 45,
    Preco: "R$ 0,00",
    nome: "Camiseta Rosa",
    descricao: "Camiseta confortável e elegante, produzida com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/CamisetaRosa.png",
  tamanhos: ["P","M","GG","G"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
{
    id: 46,
    Preco: "R$ 0,00",
    nome: "T-Shirt Rosa Arco-Iris",
    descricao: "Camiseta confortável e elegante, produzida com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/CamisetaRosaArcoIris.png",
  tamanhos: ["44","46","M","P","GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
{
   id: 47,
    Preco: "R$ 0,00",
    nome: "T-Shirt Azul Arco-Iris",
    descricao: "Camiseta confortável e elegante, produzida com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/CamisetaAzulArcoIris.png",
  tamanhos: ["44","46","M","P","G"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
];

// Exposto apenas para integrações internas, sem alterar o catálogo público.
window.FLOS_PRODUCTS = produtos;

function formatarPreco(valor){
  return Number(valor || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

async function carregarCatalogoPublico(){
  const config = window.FLOS_SUPABASE_CONFIG;
  if (!config?.url || !config?.anonKey) return;

  const params = new URLSearchParams({
    select: "id,name,description,image,link,price,active,product_sizes(size)",
    active: "eq.true",
    order: "id.asc"
  });

  try {
    const response = await fetch(`${config.url}/rest/v1/products?${params}`, {
      headers: {
        apikey: config.anonKey,
        Authorization: `Bearer ${config.anonKey}`
      }
    });
    if (!response.ok) throw new Error(`Catalogo indisponivel (${response.status})`);

    const catalogo = await response.json();
    if (!Array.isArray(catalogo) || !catalogo.length) return;

    const produtosDoBanco = catalogo.map(produto => {
      const produtoLocal = produtos.find(item => Number(item.id) === Number(produto.id));
      const tamanhos = (produto.product_sizes || []).map(item => item.size);
      return {
        ...produtoLocal,
        id: produto.id,
        nome: produto.name,
        descricao: produto.description || produtoLocal?.descricao || "",
        imagem: produto.image || produtoLocal?.imagem || "",
        link: produto.link || produtoLocal?.link || "",
        Preco: formatarPreco(produto.price),
        tamanhos: tamanhos.length ? tamanhos : (produtoLocal?.tamanhos || [])
      };
    });

    produtos.splice(0, produtos.length, ...produtosDoBanco);
  } catch (error) {
    console.warn("Catalogo do Supabase indisponivel; usando catalogo local.", error);
  }
}

/* Gera um placeholder elegante em SVG para o produto (usado até as
   fotos reais serem adicionadas em /images) */
function criarPlaceholderSVG(nome, indice){
  const tons = ["#E4EEE1", "#DCE9D7", "#EAF1E7", "#E0EBDC"];
  const cor = tons[indice % tons.length];
  return `
    <svg viewBox="0 0 300 375" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${nome}">
      <rect width="300" height="375" fill="${cor}"/>
      <path d="M110 150c0-30 18-55 40-55s40 25 40 55" fill="none" stroke="#6F9668" stroke-width="3" stroke-linecap="round" opacity="0.55"/>
      <path d="M85 340c0-70 25-120 65-120s65 50 65 120" fill="none" stroke="#6F9668" stroke-width="3" opacity="0.35"/>
      <circle cx="150" cy="85" r="9" fill="#6F9668" opacity="0.55"/>
    </svg>
  `;
}

/* Cria o HTML de um card de produto */
function criarCardProduto(produto, indice){
  const card = document.createElement("article");
  card.className = "produto-card reveal";
  card.dataset.id = produto.id;

  const tamanhosDisponiveis = [...produto.tamanhos]
    .sort(compararTamanhos)
    .map(t => `<button type="button" class="tamanho-item" data-tamanho="${t}" aria-pressed="false">${t}</button>`)
    .join("");

  const svgFallback = encodeURIComponent(criarPlaceholderSVG(produto.nome, indice));

  card.innerHTML = `
    <div class="produto-imagem">
      <img
        src="${produto.imagem}"
        alt="${produto.nome}"
        loading="lazy"
        onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,${svgFallback}';"
      >
    </div>
    <div class="produto-info">
      <h3 class="produto-nome">${produto.nome}</h3>
      <p class="produto-preco">${produto.Preco || "R$ 0,00"}</p>
      <p class="produto-descricao">${produto.descricao}</p>
      <p class="tamanhos-label">Tamanhos disponíveis</p>
      <div class="tamanhos-lista">${tamanhosDisponiveis}</div>
      <button type="button" class="btn-comprar">Comprar pelo WhatsApp</button>
    </div>
  `;

  return card;
}

function normalizarTexto(texto){
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function obterGenero(produto){
  const nome = normalizarTexto(produto.nome);
  if (nome.includes("masculino")) return "Masculino";
  return "Feminino";
}

function obterCor(produto){
  const nome = normalizarTexto(produto.nome);
  const cores = [
    ["colorido", "Colorido"],
    ["tie-dye", "Tie-dye"],
    ["azul", "Azul"],
    ["rosa", "Rosa"],
    ["pink", "Pink"],
    ["verde", "Verde"],
    ["lilas", "Lilás"],
    ["vinho", "Vinho"],
    ["marrom", "Marrom"],
    ["preto", "Preto"],
    ["branc", "Branco"]
  ];
  const corEncontrada = cores.find(([nomeCor]) => nome.includes(nomeCor));
  return corEncontrada ? corEncontrada[1] : null;
}

function compararTamanhos(a, b){
  const ordem = ["PP", "P", "M", "G", "GG", "10"];
  return ordem.indexOf(a) - ordem.indexOf(b);
}

function preencherFiltro(id, valores, comparador = (a, b) => a.localeCompare(b, "pt-BR")){
  const filtro = document.getElementById(id);
  valores.sort(comparador).forEach(valor => {
    const opcao = document.createElement("option");
    opcao.value = valor;
    opcao.textContent = valor;
    filtro.appendChild(opcao);
  });
}

function configurarFiltros(){
  const filtroGenero = document.getElementById("filtroGenero");
  const filtroCor = document.getElementById("filtroCor");
  const filtroTamanho = document.getElementById("filtroTamanho");
  const resultado = document.getElementById("resultadoFiltros");
  const grid = document.getElementById("produtosGrid");
  const limparFiltros = document.getElementById("limparFiltros");

  preencherFiltro("filtroGenero", [...new Set(produtos.map(obterGenero))]);
  preencherFiltro("filtroCor", [...new Set(produtos.map(obterCor).filter(Boolean))]);
  preencherFiltro(
    "filtroTamanho",
    [...new Set(produtos.flatMap(produto => produto.tamanhos))],
    compararTamanhos
  );

  function aplicarFiltros(){
    const filtrados = produtos.filter(produto => {
      const correspondeGenero = !filtroGenero.value || obterGenero(produto) === filtroGenero.value;
      const correspondeCor = !filtroCor.value || obterCor(produto) === filtroCor.value;
      const correspondeTamanho = !filtroTamanho.value || produto.tamanhos.includes(filtroTamanho.value);
      return correspondeGenero && correspondeCor && correspondeTamanho;
    });

    grid.replaceChildren(...filtrados.map((produto, indice) => criarCardProduto(produto, indice)));
    resultado.textContent = filtrados.length
      ? `${filtrados.length} ${filtrados.length === 1 ? "produto encontrado" : "produtos encontrados"}`
      : "Nenhum produto encontrado com esses filtros.";
    configurarScrollReveal();
  }

  [filtroGenero, filtroCor, filtroTamanho].forEach(filtro => {
    filtro.addEventListener("change", aplicarFiltros);
  });

  limparFiltros.addEventListener("click", () => {
    filtroGenero.value = "";
    filtroCor.value = "";
    filtroTamanho.value = "";
    aplicarFiltros();
  });

  aplicarFiltros();
}

/* Renderiza todos os produtos na grade */
function renderizarProdutos(){
  const grid = document.getElementById("produtosGrid");
  produtos.forEach((produto, indice) => {
    grid.appendChild(criarCardProduto(produto, indice));
  });
}

/* Abre o WhatsApp com os dados do produto escolhido */
function configurarEventosProdutos(){
  const grid = document.getElementById("produtosGrid");

  grid.addEventListener("click", (evento) => {
    const card = evento.target.closest(".produto-card");
    if (!card) return;

    const produtoId = Number(card.dataset.id);

    const tamanhoSelecionado = evento.target.closest(".tamanho-item");
    if (tamanhoSelecionado){
      card.querySelectorAll(".tamanho-item").forEach(item => {
        const selecionado = item === tamanhoSelecionado;
        item.classList.toggle("selecionado", selecionado);
        item.setAttribute("aria-pressed", String(selecionado));
      });
      return;
    }

    if (evento.target.closest(".btn-comprar")){
      const produto = produtos.find(p => p.id === produtoId);
      if (!produto) return;

      const tamanho = card.querySelector(".tamanho-item.selecionado")?.dataset.tamanho;
      if (!tamanho){
        mostrarToast("Selecione um tamanho para continuar.");
        return;
      }

      const mensagem = `Olá! Tenho interesse nesta peça:\n\nPeça: ${produto.nome}\nValor: ${produto.Preco || "R$ 0,00"}\nTamanho: ${tamanho}`;
      const whatsappUrl = `https://wa.me/5543996212570?text=${encodeURIComponent(mensagem)}`;
      window.open(whatsappUrl, "_blank", "noopener");
    }
  });
}

function configurarVisualizacaoFotos(){
  const grid = document.getElementById("produtosGrid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImagem = document.getElementById("lightboxImagem");
  const fechar = document.getElementById("lightboxFechar");

  function fecharLightbox(){
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-aberto");
    lightboxImagem.removeAttribute("src");
  }

  grid.addEventListener("click", evento => {
    const areaImagem = evento.target.closest(".produto-imagem");
    if (!areaImagem) return;

    const imagem = areaImagem.querySelector("img");
    if (!imagem) return;

    lightboxImagem.src = imagem.currentSrc || imagem.src;
    lightboxImagem.alt = imagem.alt;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-aberto");
    fechar.focus();
  });

  fechar.addEventListener("click", fecharLightbox);
  lightbox.addEventListener("click", evento => {
    if (evento.target === lightbox) fecharLightbox();
  });
  document.addEventListener("keydown", evento => {
    if (evento.key === "Escape" && !lightbox.hidden) fecharLightbox();
  });
}

/* Toast de aviso elegante */
let toastTimeout;
function mostrarToast(texto){
  const toast = document.getElementById("toast");
  toast.textContent = texto;
  toast.classList.add("visivel");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("visivel");
  }, 3200);
}

/* Menu responsivo (hambúrguer) */
function configurarMenuMobile(){
  const botao = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("open");
    botao.classList.toggle("open", aberto);
    botao.setAttribute("aria-expanded", String(aberto));
  });

  // Fecha o menu ao selecionar um link (celular)
  nav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      botao.classList.remove("open");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}

/* Revela elementos suavemente conforme entram na tela */
function configurarScrollReveal(){
  const alvos = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting){
        entrada.target.classList.add("ativo");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  alvos.forEach(alvo => observer.observe(alvo));
}

/* Marca também os itens de diferenciais e o bloco "sobre" para o reveal */
function marcarElementosParaReveal(){
  document.querySelectorAll(".diferencial-item, .sobre-text, .sobre-visual")
    .forEach(el => el.classList.add("reveal"));
}

/* Inicialização */
document.addEventListener("DOMContentLoaded", async () => {
  if (!document.getElementById("produtosGrid")) return;
  await carregarCatalogoPublico();
  renderizarProdutos();
  configurarFiltros();
  configurarEventosProdutos();
  configurarVisualizacaoFotos();
  configurarMenuMobile();
  marcarElementosParaReveal();
  configurarScrollReveal();
});
