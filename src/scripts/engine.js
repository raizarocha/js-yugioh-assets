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
  player1: "player-field-card",
  computer: "computer-field-card",
};

const pathImages = ".src/assets/icons/";

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

async function drawCards(cardNumbers, fieldSide) {
  // para cada número de cards passado
  for(let i=0; i < cardNumbers; i++) {
    // pega um id aleatório
    const randomIdCard = await getRandomCardId();
    // e traz a img correspondente ao id e o campo passado
    const cardImage = await createCardImage(randomIdCard, fieldSide);
    // após receber a img, a adiciona ao campo especificado
    document.getElementById(fieldSide).appendChild(cardImage);
  }
}

function init() {
  drawCards(5, playerSides.player1);
  drawCards(5, playerSides.computer);
};

init();