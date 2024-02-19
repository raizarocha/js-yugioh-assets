// objeto de objetos, onde será guardado o estado de memória das propriedades/características
const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById("score_points"),
  },
  cardSprites: {
    avatar: document.getElementById("card-image"),
    name: document.getElementById("card-name"),
    type: document.getElementById("card-type"),
  },
  fieldCards: {
    player: document.getElementById("player-field-card"),
    computer: document.getElementById("computer-field-card"),
  },
  actions: {
    button: document.getElementById("next-duel"),
  }
};

const playerSides = {
  player1: "player-cards",
  computer: "computer-cards",
};

const pathImages = "./src/assets/icons/";

const cardData = [
  // cria para cada registro um objeto com propriedades do card
  {
    id: 0,
    name: "Blue Eyes White Dragon",
    type: "Paper",
    img: `${pathImages}dragon.png`,
    WinOf: [1],
    LoseOf: [2],
  },
  {
    id: 1,
    name: "Dark Magician",
    type: "Rock",
    img: `${pathImages}magician.png`,
    WinOf: [2],
    LoseOf: [0],
  },
  {
    id: 2,
    name: "Exodia",
    type: "Scissors",
    img: `${pathImages}exodia.png`,
    WinOf: [0],
    LoseOf: [1],
  },
];

// retorna o id aleatório de uma carta
async function getRandomCardId() {
  // gera um número aleatório, de acordo com o tamanho do cardData
  const randomIndex = Math.floor(Math.random() * cardData.length);
  // retorna o id da carta correspondente ao index gerado na randomIndex
  return cardData[randomIndex].id;
};

async function createCardImage(cardId, fieldSide) {
  // cria o elemento img
  const cardImage = document.createElement("img");
  // seta atributos de altura, src e id
  cardImage.setAttribute("height", "100px");
  cardImage.setAttribute("src", `${pathImages}card-back.png`);
  cardImage.setAttribute("data-id", cardId);
  // adiciona classe "card"
  cardImage.classList.add("card");

  // se o campo passado for do player1
  // obs.: é necessário fazer esse if, pois apenas o campo do player deve ser clicável
  if (fieldSide === playerSides.player1) {
    // no evento de click, será gerado as cartas no campo
    cardImage.addEventListener("click", () => {
      setCardsField(cardImage.getAttribute("data-id"));
    });
  };

  // ao passar o mouse por cima da carta, ela é desenhada no lado esquerdo
  cardImage.addEventListener("mouseover", () => {
    drawSelectedCard(cardId);
  });

  // retorna a carta criada
  return cardImage;
};

async function drawCards(cardNumbers, fieldSide) {
  // para cada número de cards passado
  for(let i=0; i < cardNumbers; i++) {
    // pega um id aleatório
    const randomIdCard = await getRandomCardId();
    // e traz a img correspondente ao id e o campo passado
    const cardImage = await createCardImage(randomIdCard, fieldSide);

    // após receber a img, a adiciona ao campo especificado
    document.getElementById(fieldSide).appendChild(cardImage);
  };
};

function init() {
  drawCards(5, playerSides.player1);
  drawCards(5, playerSides.computer);
};

init();