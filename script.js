/* =====================================================
   FLOS PIJAMAS — script.js
   =====================================================
   Para adicionar, remover ou editar um produto, basta
   alterar o array "produtos" abaixo. Cada objeto controla
   um card inteiro (imagem, nome, descrição, preço e
   tamanhos disponíveis).
   ===================================================== */

const NUMERO_WHATSAPP = "5543996212570";

const produtos = [
  {
    id: 1,
    nome: "Pijama Azul Masculino",
    descricao: "Pijama confortável e elegante, produzido com tecido macio e ideal para noites tranquilas.",
    preco: 149.90,
    imagem: "pijamas/AzulMasculino.png",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 2,
    nome: "Pijama Coração Feminino",
    descricao: "Toque acetinado e caimento fluido, para uma sensação de luxo a cada movimento.",
    preco: 189.90,
    imagem: "pijamas/femininoCoração.png",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 3,
    nome: "Pijama Vermelho Confort",
    descricao: "Modelagem solta e tecido respirável, pensado para o descanso mais completo.",
    preco: 139.90,
    imagem: "pijamas/femininoVermelho.png",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 4,
    nome: "Pijama Elegance",
    descricao: "Design sofisticado com detalhes em renda, para quem une conforto e estilo.",
    preco: 179.90,
    imagem: "pijamas/AzulMasculino.png",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 5,
    nome: "Pijama Rosé",
    descricao: "Tom suave e tecido leve, uma escolha delicada para todas as estações.",
    preco: 159.90,
    imagem: "pijamas/femininoCoração.png",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 6,
    nome: "Pijama Classic",
    descricao: "Um clássico atemporal, com corte reto e acabamento impecável.",
    preco: 129.90,
    imagem: "pijamas/femininoVermelho.png",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 7,
    nome: "Pijama Soft",
    descricao: "Malha extra macia que abraça o corpo do início ao fim da noite.",
    preco: 134.90,
    imagem: "pijamas/AzulMasculino.png",
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: 8,
    nome: "Pijama Premium",
    descricao: "Nossa peça mais nobre, com tecido de alta qualidade e acabamento artesanal.",
    preco: 219.90,
    imagem: "pijamas/femininoCoração.png",
    tamanhos: ["P", "M", "G", "GG"]
  }
];

/* Guarda o tamanho selecionado por produto (id -> tamanho) */
const tamanhosSelecionados = {};

/* Formata número para moeda brasileira */
function formatarPreco(valor){
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
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

  const botoesTamanho = produto.tamanhos
    .map(t => `<button type="button" class="tamanho-btn" data-tamanho="${t}">${t}</button>`)
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
      <p class="produto-preco">${formatarPreco(produto.preco)}</p>
      <p class="tamanhos-label">Selecione o tamanho</p>
      <div class="tamanhos-lista">${botoesTamanho}</div>
      <button type="button" class="btn-comprar">Quero este pijama</button>
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

/* Delegação de eventos: seleção de tamanho e clique em comprar */
function configurarEventosProdutos(){
  const grid = document.getElementById("produtosGrid");

  grid.addEventListener("click", (evento) => {
    const card = evento.target.closest(".produto-card");
    if (!card) return;

    const produtoId = Number(card.dataset.id);

    // Seleção de tamanho
    if (evento.target.classList.contains("tamanho-btn")){
      const botoesDoCard = card.querySelectorAll(".tamanho-btn");
      botoesDoCard.forEach(botao => botao.classList.remove("selecionado"));
      evento.target.classList.add("selecionado");
      tamanhosSelecionados[produtoId] = evento.target.dataset.tamanho;
      return;
    }

    // Clique em "Quero este pijama"
    if (evento.target.classList.contains("btn-comprar")){
      const tamanho = tamanhosSelecionados[produtoId];

      if (!tamanho){
        mostrarToast("Por favor, selecione um tamanho antes de continuar.");
        return;
      }

      const produto = produtos.find(p => p.id === produtoId);
      abrirWhatsApp(produto, tamanho);
    }
  });
}

/* Monta a mensagem e abre o WhatsApp em nova aba */
function abrirWhatsApp(produto, tamanho){
  const mensagem = `Olá! Tenho interesse no produto ${produto.nome}. Gostaria do tamanho ${tamanho}. O valor anunciado é ${formatarPreco(produto.preco)}. Gostaria de mais informações.`;
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank", "noopener");
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
