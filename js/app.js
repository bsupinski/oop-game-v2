const startButton = document.getElementById("btn__reset");
const keyBoard = document.getElementById("qwerty");
let newGame;

startButton.addEventListener("click", () => {
  newGame = new Game();
  newGame.startGame();
});

keyBoard.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    newGame.hadnleInteraction(e.target);
  }
});

window.addEventListener("keyup", (e) => {
  const screenKeys = document.querySelectorAll(".key");

  if (/^[a-zA-z]$/.test(e.key)) {
    const letter = document.getElementsByClassName(`${e.key.toLowerCase()}`);
    console.log(letter);
  }
});
