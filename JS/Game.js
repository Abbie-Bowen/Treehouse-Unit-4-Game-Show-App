/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "You ride the bike",
      "They like to shop",
      "I like cake and pie",
      "Do you have a pet",
      "His dad is here",
    ];
    this.activePhrase = null;
  }
  /*
   *hides start game overlay and displays a random phrase from the phrase array,
   */
  startGame() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    this.activePhrase = new Phrase(this.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
  }

  /* @return {string} - random phrase from the phrase array
   */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  // handleInteraction(e.target.key) {
  //   disable the e.target.key's keyboard button;
  //
  //   if (button clicked === letter in this.activePhrase) {
  //     add chosen CSS class to the letter's keyboard Button
  //     this.activePhrase.showMatchedLetter();
  //     this.checkForWin();
  //     if (this.checkForWin) {
  //       this.gameOver();
  //     }
  //   } else if (button clicked !== letter in this.activePhrase) {
  //     add wrong CSS class to letter's keyboard button;
  //     this.removeLife();
  //   }
  //
  // }

  // removeLife() {
  //   replace liveHeart.png image with lostHeart.png images;
  //   this.missed +1;
  //   if (this.missed >= 5) {
  //     this.gameOver();
  //   }
  // }

  // checkForWin() {
  //   if () {
  //     return true;
  //   }
  // }
  // checkForWin(): this method checks to see if the player has revealed all of
  // the letters in the active phrase.
}
