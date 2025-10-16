const bannerItems =[
    {
        imagem: "../assets/img/perderhomemBnn.png",
        titulo:"Como Perder Um Homem Em 10 Dias",
        descricao:"Ben Barry é um publicitário que faz uma grande aposta com seu chefe: caso faça com que uma mulher se apaixone por ele em 10 dias ele será o responsável por uma concorrida campanha de diamantes que pertence à empresa. A vítima escolhida por Ben é Andie Anderson, uma jornalista feminista que está desenvolvendo uma matéria sobre como perder um homem em 10 dias e está decidida a infernizar a vida de qualquer homem que se aproximar dela."

    },
    {
        imagem:"../assets/img/mentirinhaBnn.png",
        titulo:"Esposa De Mentirinha",
        descricao:"Esposa de Mentirinha é um filme que segue a história de Danny Maccabee, interpretado por Adam Sandler, um cirurgião plástico que, após ser traído pela noiva no dia do seu casamento, começa a viver relacionamentos superficiais. Para conquistar uma nova paixão, Palmer, ele pede à sua assistente, Katherine, interpretada por Jennifer Aniston, que finja ser sua esposa em um plano para encobrir suas mentiras e conquistar o coração dela. O filme explora as confusões e mal-entendidos que surgem dessa situação."

    },
    {
        imagem:"../assets/img/derepenteBnn.png",
        titulo:"De Repente 30",
        descricao:"Jenna Rink, uma adolescente de 13 anos, está insatisfeita com sua vida. Após ser humilhada em sua festa de aniversário, ela faz um desejo: tornar-se adulta. Como em um passe de mágica, Jenna acorda no dia seguinte com 30 anos, vivendo em Nova York como uma bem-sucedida editora de revista. No entanto, ela logo percebe que a vida adulta não é tão perfeita quanto imaginava e precisa lidar com as consequências de suas escolhas, enquanto tenta reconectar-se com seu melhor amigo de infância, Matt."

    }
];
// DECLARANDO AS VARIAVEIS E ELEMENTOS COM DOM (DOCUMENT OBJECT MODEL)

const tempo= 8000; 
// TEMPO EM MILISSEGUNDOS
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
let i = 0;
// INICIO DA CONTAGEM DAS IMAGENS

//  Criando a função slideShow
function slideShow(){

    // ALTERA A IMAGEM DO FUNDO DO BANNER
    elementoBanner.style.backgroundImage =`url(${bannerItems[i].imagem})`;
    elementoTitulo.textContent =bannerItems[i].titulo;
    elementoDescricao.textContent = bannerItems[i].descricao;

    i++;
    if( i >= bannerItems.length){
        i=0;
    }
    setTimeout(slideShow, tempo);
}

slideShow();