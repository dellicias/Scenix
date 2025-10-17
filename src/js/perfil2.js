// --- LISTA DE FILMES DO BANNER ---
const bannerItems = [
  {
    imagem: "../assets/img/aneis.png",
    titulo: "O Senhor dos Anéis: Os Anéis de Poder",
    descricao:
      "Milhares de anos antes dos eventos de O Hobbit e O Senhor dos Anéis. A trama explora a criação dos Anéis do Poder, a ascensão de Sauron, o reino de Númenor e a Última Aliança de Elfos e Homens.",
    trailer: "https://www.youtube.com/embed/m-CvfthZ4zg"
  },
  {
    imagem: "../assets/img/bigbang.png",
    titulo: "Big Bang: A Teoria",
    descricao:
      "Leonard Hofstadter (Johnny Galecki) e Sheldon Cooper (Jim Parsons) são dois brilhantes físicos que dividem o mesmo apartamento. Suas vidas se complicam quando uma jovem linda, porém pouco inteligente, Penny (Kaley Cuoco), se muda para o apartamento da frente.",
    trailer: "https://www.youtube.com/embed/rCj-Fb1OmXg"
  },
  {
    imagem: "../assets/img/star.png",
    titulo: "Star Wars: Episódio IV – Uma Nova Esperança",
    descricao:
      "19 anos após os eventos de Star Wars - Episódio III: A Vingança dos Sith, o alto oficial do Império Galáctico e Lorde Sith, Darth Vader, sequestra a Senadora e Princesa Leia Organa sob duas acusações: fazer parte da resistência ao Império, a Aliança Rebelde, e interceptar os planos do projeto da arma secreta imperial, a Estrela da Morte.",
    trailer: "https://www.youtube.com/embed/Q8b09bE1iGQ"
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