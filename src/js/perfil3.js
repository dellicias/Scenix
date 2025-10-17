// --- LISTA DE FILMES DO BANNER ---
const bannerItems = [
  {
    imagem: "../assets/img/perderhomemBnn.png",
    titulo: "Como Perder Um Homem Em 10 Dias",
    descricao:
      "Ben Barry é um publicitário que faz uma grande aposta com seu chefe: caso faça com que uma mulher se apaixone por ele em 10 dias ele será o responsável por uma concorrida campanha de diamantes que pertence à empresa. A vítima escolhida por Ben é Andie Anderson, uma jornalista feminista que está desenvolvendo uma matéria sobre como perder um homem em 10 dias e está decidida a infernizar a vida de qualquer homem que se aproximar dela.",
    trailer: "https://www.youtube.com/embed/TRdxUN-DB5w"
  },
  {
    imagem: "../assets/img/mentirinhaBnn.png",
    titulo: "Esposa De Mentirinha",
    descricao:
      "Esposa de Mentirinha é um filme que segue a história de Danny Maccabee, interpretado por Adam Sandler, um cirurgião plástico que, após ser traído pela noiva no dia do seu casamento, começa a viver relacionamentos superficiais. Para conquistar uma nova paixão, Palmer, ele pede à sua assistente, Katherine, interpretada por Jennifer Aniston, que finja ser sua esposa em um plano para encobrir suas mentiras e conquistar o coração dela. O filme explora as confusões e mal-entendidos que surgem dessa situação.",
    trailer: "https://www.youtube.com/embed/b5rNb6BnNEg"
  },
  {
    imagem: "../assets/img/derepenteBnn.png",
    titulo: "De Repente 30",
    descricao:
      "Jenna Rink, uma adolescente de 13 anos, está insatisfeita com sua vida. Após ser humilhada em sua festa de aniversário, ela faz um desejo: tornar-se adulta. Como em um passe de mágica, Jenna acorda no dia seguinte com 30 anos, vivendo em Nova York como uma bem-sucedida editora de revista. No entanto, ela logo percebe que a vida adulta não é tão perfeita quanto imaginava e precisa lidar com as consequências de suas escolhas, enquanto tenta reconectar-se com seu melhor amigo de infância, Matt.",
    trailer: "https://www.youtube.com/embed/NV7PBRBcxu0"
  }
];

// --- ELEMENTOS DOM ---
const tempo = 8000; // tempo entre trocas
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
const botaoAssistir = document.querySelector(".banner-assistir");
let i = 0;

// --- SLIDESHOW AUTOMÁTICO ---
function slideShow() {
  const item = bannerItems[i];
  elementoBanner.style.backgroundImage = `url(${item.imagem})`;
  elementoTitulo.textContent = item.titulo;
  elementoDescricao.textContent = item.descricao;

  // guarda o link do trailer atual no botão
  botaoAssistir.dataset.trailer = item.trailer;

  i++;
  if (i >= bannerItems.length) i = 0;
  setTimeout(slideShow, tempo);
}

slideShow();

// --- CRIAR OVERLAY DO VÍDEO ---
const overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.innerHTML = `
  <div class="video-container">
    <iframe width="560" height="315" src="" title="Trailer" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
`;
document.body.appendChild(overlay);
const iframe = overlay.querySelector("iframe");

// --- ABRIR TRAILER ---
botaoAssistir.addEventListener("click", () => {
  const linkTrailer = botaoAssistir.dataset.trailer;
  iframe.src = linkTrailer + "?autoplay=1";
  overlay.style.display = "flex";
});

// --- FECHAR AO CLICAR FORA ---
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
    iframe.src = ""; // parar o vídeo
  }
});