// --- LISTA DE FILMES DO BANNER ---
const bannerItems = [
  {
    imagem: "../assets/corra!.png",
    titulo: "Corra!",
    descricao:
      "Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana. Na luxuosa propriedade dos pais dela, Chris percebe que a família esconde algo muito perturbador.",
    trailer: "https://www.youtube.com/watch?v=mDGV5UucTu8"
  },
  {
    imagem: "../assets/img/psicopata.png",
    titulo: "Psicopata Americano",
    descricao:
      "Em Nova York, na geração yuppie nos anos 80, um corretor da Wall Street, Patrick Bateman é um assassino frio e, instigado por suas emoções, mata todos os que ficam em seu caminho e ameaçam suas ambições.",
    trailer: "https://www.youtube.com/watch?v=_RympUu3MWc"
  },
  {
    imagem: "../assets/img/parasita.png",
    titulo: "Parasita",
    descricao:
      "Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado. Por obra do acaso, ele começa a dar aulas de inglês para uma garota de família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe e filhos bolam um plano para se infiltrar também na abastada família, um a um. No entanto, os segredos e mentiras necessários à ascensão social cobram o seu preço.",
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