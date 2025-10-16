// --- LISTA DE FILMES DO BANNER ---
const bannerItems = [
  {
    imagem: "../assets/img/freiraBnn.png",
    titulo: "A Freira",
    descricao:
      "Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre assombrado e uma noviça prestes a se tornar freira. Arriscando suas vidas, a fé e até suas almas, os dois descobrem um segredo profano e se confrontam com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento em um campo de batalha.",
    trailer: "https://www.youtube.com/embed/4V44ew-laC4"
  },
  {
    imagem: "../assets/img/irmaBnn.png",
    titulo: "Irmã Morte",
    descricao:
      "Narcisa, jovem noviça com poderes sobrenaturais, chega a uma escola para garotas para ser professora. O local é um antigo convento cheio de segredos aterrorizantes. Conforme os dias passam, ela fica cada vez mais perto de desvendar os acontecimentos estranhos e perturbadores que atormentam a todos.",
    trailer: "https://www.youtube.com/embed/9ta8zVcO0FQ"
  },
  {
    imagem: "../assets/img/exorcistaBnn.png",
    titulo: "O Exorcista: O Devoto",
    descricao:
      "Victor Fielding decide confrontar o mal quando repara que sua filha, Angela, e a amiga dela, Katherine, mostram sinais de possessão demoníaca.",
    trailer: "https://www.youtube.com/embed/lLAUzNfG_30"
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

  // salva o trailer atual no botão
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