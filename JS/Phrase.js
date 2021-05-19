/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase(); //string
  }

  /* adds letter placeholders when game begins*/
  addPhraseToDisplay() {
    const phraseSection = document.getElementById("phrase");
    const phraseLetters = this.phrase.split("");
    console.log(phraseLetters);
    phraseLetters.forEach((letter) => {
      let phraseElement = document.createElement("li");
      if (letter !== " ") {
        phraseElement.className = `hide letter ${letter}`;
        phraseElement.textContent = `${letter}`;
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
   */
  checkLetter(selectedLetter) {
    return this.phrase.includes(selectedLetter);
  }

  /*
   * reveals the correct letters the player has guessed
   * @param {string} - keypress input from user
   */
  showMatchedLetter(selectedLetter) {
    let matchedLetter = document.getElementsByClassName(`${selectedLetter}`);
    for (element in matchedLetter) {
      element.className = `show letter ${letter}`;
    }
  }
}
