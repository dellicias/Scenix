// --- LISTA DE FILMES DO BANNER ---
const bannerItems = [
  {
    imagem: "../assets/img/rei.png",
    titulo: "O Rei Leão",
    descricao:
      "Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Oscar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos, Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Scar.",
    trailer: "https://www.youtube.com/embed/rHiHRhbTv-Q"
  },
  {
    imagem: "../assets/img/gumball.png",
    titulo: "O Incrível Mundo de Gumball",
    descricao:
      "Gumball e seu grande amigo Darwin vivem aventuras e não param de se meter em problemas.",
    trailer: "https://www.youtube.com/embed/On_IHVGEU6E"
  },
  {
    imagem: "../assets/img/malvadofav.png",
    titulo: "Meu Malvado Favorito 4",
    descricao:
      "Gru dá as boas-vindas a um novo membro da família, Gru Jr., que pretende atormentar seu pai. No entanto, sua existência pacífica logo desmorona quando um mentor do crime escapa da prisão e jura vingança contra Gru.",
    trailer: "https://www.youtube.com/embed/seSIJf5mhPE"
  }
];

// --- ELEMENTOS DOM ---
const tempo = 8000; // tempo de troca em milissegundos
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

  // Salva o trailer atual no botão
  botaoAssistir.dataset.trailer = item.trailer;

  i++;
  if (i >= bannerItems.length) i = 0;
  setTimeout(slideShow, tempo);
}

slideShow();

// --- CRIA OVERLAY DO VÍDEO ---
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
    iframe.src = ""; // para o vídeo
  }
});