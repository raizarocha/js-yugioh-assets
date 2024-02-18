// objeto de objetos, onde será guardado o estado de memória das propriedades/características
const state = {
  score: {
    playerScore: 0,
    computerScore: 0,
    scoreBox: document.getElementById("score_points"),
  },
  cardSprites: {
    avatar: document.getElementById("card-image"),
    avatar: document.getElementById("card-name"),
    avatar: document.getElementById("card-type"),
  },
  fieldCards: {
    player: document.getElementById("player-field-card"),
    player: document.getElementById("computer-field-card"),
  },
  actions: {
    button: document.getElementById("next-duel"),
  }
};

function init() {};

init();