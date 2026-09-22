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
    nome: "Pijama rosa com Preto Listrado",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/RosaPretoListrado.png",
    tamanhos: ["PP", "P", "10"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20azul%20masculino"
  },
  {
    id: 2,
    nome: "Pijama Listrado Colorido",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/ColoridoListrado.png",
    tamanhos: ["PP", "M", "10"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20coracao%20feminino"
  },
  {
    id: 3,
    nome: "Pijama Verde Quadriculado",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/VerdeQuadriculado.png",
    tamanhos: ["PP","GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20vermelho%20confort"
  },
  {
    id: 4,
    nome: "Pijama Lilas Liso Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/LilasLiso.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20elegance"
  },
  {
    id: 5,
    nome: "Pijama Lilas Liso - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/LilasLiso.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20elegance"
  },
  {
    id: 6,
    nome: "Pijama Azul com Vermelho Bolinhas - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulVermelho.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20classic"
  },
  {
    id: 7,
     nome: "Pijama Azul com Vermelho Bolinhas - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulVermelho.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20classic"
  },
  {
    id: 8,
    nome: "Pijama Verde com Bolinhas - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/VerdeBolinhas.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 9,
    nome: "Pijama Preto  com Bolinhas - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PretoBolinhas.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 10,
    nome: "Pijama Preto  com Bolinhas - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PretoBolinhas.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 11,
    nome: "Pijama Azul com Bolinhas",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/AzulBolinhas.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 12,
    nome: "Pijama Pink com Azul - Manga Longa + Calça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PinkAzul.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
   {
    id: 13,
    nome: "Pijama Pink com Azul - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/PinkAzul.png",
    tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 14,
    nome: "Pijama Vinho - Manga Curta + Shorts",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/vinho.png",
    tamanhos: ["G","GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 15,
    nome: "Pijama Branco com Estampa de Boca",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoBoca.png",
    tamanhos: ["PP"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
    {
    id: 16,
    nome: "Pijama Branco com Estampa de Onça",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancoOnça.png",
  tamanhos: ["M", "GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
   {
    id: 17,
    nome: "Camisola Branca Quadriculada",
    descricao: "Camisola confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/CamisolaBrancoQuadriculado.png",
  tamanhos: ["PP"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 18,
    nome: "Camisola Azul Quadriculada",
    descricao: "Camisola confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/CamisolaAzulQuadriculado.png",
  tamanhos: ["P", "M"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  },
  {
    id: 19,
    nome: "Pijama Branco Florido",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    imagem: "pijamas/BrancaFlores.png",
  tamanhos: ["GG"],
    link: "https://www.mercadolivre.com.br/ofertas/?search=pijama%20premium"
  }

];

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

  const tamanhosDisponiveis = produto.tamanhos
    .map(t => `<span class="tamanho-item">${t}</span>`)
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
      <p class="produto-descricao">${produto.descricao}</p>
      <p class="tamanhos-label">Tamanhos disponíveis</p>
      <div class="tamanhos-lista">${tamanhosDisponiveis}</div>
      <button type="button" class="btn-comprar">Escolher no Mercado Livre</button>
    </div>
  `;

  return card;
}

/* Renderiza todos os produtos na grade */
function renderizarProdutos(){
  const grid = document.getElementById("produtosGrid");
  produtos.forEach((produto, indice) => {
    grid.appendChild(criarCardProduto(produto, indice));
  });
}

/* Abre o produto no Mercado Livre */
function configurarEventosProdutos(){
  const grid = document.getElementById("produtosGrid");

  grid.addEventListener("click", (evento) => {
    const card = evento.target.closest(".produto-card");
    if (!card) return;

    const produtoId = Number(card.dataset.id);

    if (evento.target.classList.contains("btn-comprar")){
      const produto = produtos.find(p => p.id === produtoId);
      if (!produto) return;

      window.open(produto.link, "_blank", "noopener");
    }
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
document.addEventListener("DOMContentLoaded", () => {
  renderizarProdutos();
  configurarEventosProdutos();
  configurarMenuMobile();
  marcarElementosParaReveal();
  configurarScrollReveal();
});
