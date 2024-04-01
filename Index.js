const playerText = document.getElementById("playerText");
const restartButton = document.getElementById("restartBtn");
const gameBoard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementsByClassName("box"));

const O_text = "O";
const X_text = "X";

let currentPlayer = X_text;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

const boxClicked = (e) => {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    currentPlayer = currentPlayer == X_text ? O_text : X_text;
  }
};

const restartGame = () => {
  spaces.fill(null);
  boxes.forEach((box) => (box.innerText = ""));
  currentPlayer = X_text;
};

restartButton.addEventListener("click", restartGame);

startGame();
