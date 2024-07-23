class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("clever girl"),
      new Phrase("ill be back"),
      new Phrase("my precious"),
      new Phrase("you had me at hello"),
      new Phrase("hello world"),
    ];
    this.activePhrase = null;
  }

  startGame() {
    const overlay = document.querySelector("#overlay");
    const keys = document.querySelectorAll(".key");
    const heartRapper = document.querySelector("ol");
    overlay.classList.replace("lose", "start");
    overlay.classList.replace("win", "start");

    // Resets missed coutner to 0
    this.missed = 0;
    // Reset keys to default
    keys.forEach((key) => {
      key.disabled = false;
      key.classList.remove("wrong", "chosen");
    });
    // Reset hearts
    heartRapper.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      heartRapper.innerHTML += `<li class="tries">
            <img
              src="images/liveHeart.png"
              alt="Heart Icon"
              height="35"
              width="30"
            />`;
    }
    // Hide overlay
    overlay.style.display = "none";
    // Choose a phrase and add it to display
    this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    const randomPhraseChoice = Math.floor(Math.random() * this.phrases.length);
    this.activePhrase = this.phrases[randomPhraseChoice];
  }

  hadnleInteraction(letter) {
    letter.disabled = true;
    this.activePhrase.checkLetter(letter.innerText);
    if (!this.activePhrase.phrase.includes(letter.innerText)) {
      letter.classList.add("wrong");
      this.removeLife();
    } else {
      letter.classList.add("chosen");
    }
    this.checkForWin();
  }

  removeLife() {
    const hearts = document.querySelectorAll("img[src='images/liveHeart.png']");
    hearts[hearts.length - 1].src = "/images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) this.gameOver();
  }

  checkForWin() {
    const hiddenLetters = document.getElementsByClassName("hide");
    if (hiddenLetters.length === 0) {
      this.gameOver();
    }
  }

  gameOver() {
    const overlay = document.querySelector("#overlay");
    overlay.style.display = "flex";
    if (this.missed === 5) {
      overlay.classList.replace("start", "lose");
      document.getElementById("game-over-message").innerText = "You lost";
    } else {
      overlay.classList.replace("start", "win");
      document.getElementById("game-over-message").innerText = "You Won";
    }
  }
}
