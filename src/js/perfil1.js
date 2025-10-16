const bannerItems =[
    {
        imagem: "../assets/img/freiraBnn.png",
        titulo:"A Freira",
        descricao:"Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre assombrado e uma noviça prestes a se tornar freira. Arriscando suas vidas, a fé e até suas almas, os dois descobrem um segredo profano e se confrontam com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento em um campo de batalha."

    },
    {
        imagem:"../assets/img/irmaBnn.png",
        titulo:"Irmã Morte",
        descricao:"Narcisa, jovem noviça com poderes sobrenaturais, chega a uma escola para garotas para ser professora. O local é um antigo convento cheio de segredos aterrorizantes. Conforme os dias passam, ela fica cada vez mais perto de desvendar os acontecimentos estranhos e perturbadores que atormentam a todos."

    },
    {
        imagem:"../assets/img/exorcistaBnn.png",
        titulo:"O Exorcista: O Devoto",
        descricao:"Victor Fielding decide confrontar o mal quando repara que suafilha, Angela, e a amiga dela, Katherine, mostram sinais de possessão demoníaca."

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

