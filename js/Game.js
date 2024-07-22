class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "cleve girl",
      "ill be back",
      "my precious",
      "you had me at hello",
      "hello world",
    ];
    this.activePhrase = null;
  }

  startGame() {
    const overlay = document.querySelector("#overlay");
    const keys = document.querySelectorAll(".key");
    const heartRapper = document.querySelector("ol");
    // Resets missed coutner to 0
    this.missed = 0;
    // Reset keys to default
    keys.forEach((key) => {
      key.disabled = false;
      key.classList.remove("wrong");
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
    this.activePhrase = new Phrase(this.phrases[randomPhraseChoice]);
  }

  hadnleInteraction(key) {
    key.disabled = true;
    this.activePhrase.checkLetter(key.innerText);
    if (!this.activePhrase.phrase.includes(key.innerText)) {
      key.classList.add("wrong");
      this.removeLife();
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
