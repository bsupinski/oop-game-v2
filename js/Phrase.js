class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const container = document.getElementById("phrase");
    container.innerHTML = "";
    this.phrase.split("").forEach((letter) => {
      if (letter === " ") container.innerHTML += '<li class="space"> </li>';

      if (letter !== " ")
        container.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
    });
  }

  showMatchedLetter(letter) {
    const lettersToShow = document.querySelectorAll(`.${letter}`);
    lettersToShow.forEach((letter) => {
      letter.classList.replace("hide", "show");
    });
  }

  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      this.showMatchedLetter(letter);
    }
  }
}
