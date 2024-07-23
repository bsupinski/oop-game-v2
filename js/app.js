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
    const letter = e.key.toLowerCase();
    e.key = false;
    screenKeys.forEach((screenKey) => {
      if (screenKey.innerHTML.toLowerCase() === letter) {
        newGame.hadnleInteraction(screenKey);
      }
    });
  }
});
