const bannerItems =[
    {
        imagem: "../assets/img/sdaBnn.png",
        titulo:"O Senhor dos Anéis: os Anéis de Poder",
        descricao:"Milhares de anos antes dos eventos de O Hobbit e O Senhor dos Anéis. A trama explora a criação dos Anéis do Poder, a ascensão de Sauron, o reino de Númenor e a Última Aliança de Elfos e Homens."

    },
    {
        imagem:"../assets/img/bbtBnn.png",
        titulo:"Big Bang: A Teoria",
        descricao:"Leonard Hofstadter (Johnny Galecki) e Sheldon Cooper (Jim Parsons) são dois brilhantes físicos que dividem o mesmo apartamento. Suas vidas se complicam quando uma jovem linda, porém pouco inteligente, Penny (Kaley Cuoco), se muda para o apartamento da frente."

    },
    {
        imagem:"../assets/img/swBnn.png",
        titulo:"Star Wars: Episódio IV – Uma Nova Esperança",
        descricao:"19 anos após os eventos de Star Wars - Episódio III: A Vingança dos Sith, o alto oficial do Império Galáctico e Lorde Sith, Darth Vader, sequestra a Senadora e Princesa Leia Organa sob duas acusações: fazer parte da resistência ao Império, a Aliança Rebelde, e interceptar os planos do projeto da arma secreta imperial, a Estrela da Morte."

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

