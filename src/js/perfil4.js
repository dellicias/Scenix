const bannerItems =[
    {
        imagem: "../assets/img/rei.png",
        titulo:"O Rei Leão",
        descricao:"Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba, o herdeiro de seu pai, Mufasa. O tio malvado de Simba, Oscar, planeja roubar o trono de Mufasa atraindo pai e filho para uma emboscada. Simba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba, ele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Scar."

    },
    {
        imagem:"../assets/img/gumball.png",
        titulo:"O Incrível Mundo de Gumball",
        descricao:"Gumball e seu grande amigo Darwin vivem aventuras e não param de se meter em problemas."
    },
    {
        imagem:"../assets/img/malvadofav.png",
        titulo:"Meu Malvado Favorito 4",
        descricao:"Gru dá as boas-vindas a um novo membro da família, Gru Jr., que pretende atormentar seu pai. No entanto, sua existência pacífica logo desmorona quando um mentor do crime escapa da prisão e jura vingança contra Gru."
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

