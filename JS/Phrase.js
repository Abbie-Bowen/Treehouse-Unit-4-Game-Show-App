/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.letters = this.phrase.split("");
    this.remainingPhraseLetters = this.letters.filter((l) => l !== " ");
  }

  /* adds letter placeholders when game begins*/
  addPhraseToDisplay() {
    const phraseSection = document.querySelector("div > ul");
    const phraseLetters = this.letters;
    phraseLetters.forEach((letter) => {
      let phraseElement = document.createElement("li");
      if (letter !== " ") {
        phraseElement.textContent = "?";
        phraseElement.className = `hide letter ${letter}`;
        phraseSection.appendChild(phraseElement);
      } else if (letter === " ") {
        phraseElement.className = "space";
        phraseElement.textContent = `${letter}`;
        phraseSection.appendChild(phraseElement);
      }
    });
  }

  /*
   * checks to see if the letter selected by the player
   * matches a letter in the phrase.
   * @param {string} - keypress input from user
   * @return {boolean}
  //  */
  checkLetter(letter) {
    return this.letters.includes(letter);
  }

  /*
   * reveals the correct letters the player has guessed
   * also updates this.reaminingPhraseLetters with remaining unguessed
   * letters in the phrase
   * @param {string} - keypress input from user
   */
  showMatchedLetter(letter) {
    const matchedLetter = document.querySelectorAll(`.${letter}`);
    for (const element of matchedLetter) {
      element.textContent = `${letter}`;
      element.className = `show letter ${letter}`;
    }
    this.remainingPhraseLetters = this.remainingPhraseLetters.filter(
      (l) => l !== letter
    );
  }
}
