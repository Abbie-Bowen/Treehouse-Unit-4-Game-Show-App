/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed: 0;
    this.phrases: phraseArrayLettersOnly;
    this.activePhrase: null;

  }

  startGame() {
    hide screen overlay;
    this.activePhrase = this.phrases.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

getRandomPhrase(){
  let randomIndex = ;
  return this.phrases[randomIndex];
}

handleInteraction(e.target.key) {
  disable the e.target.key's keyboard button;

  if (button clicked === letter in this.activePhrase) {
    add chosen CSS class to the letter's keyboard Button
    this.activePhrase.showMatchedLetter();
    this.checkForWin();
    if (this.checkForWin) {
      this.gameOver();
    }
  } else if (button clicked !== letter in this.activePhrase) {
    add wrong CSS class to letter's keyboard button;
    this.removeLife();
  }

}

removeLife() {
  replace liveHeart.png image with lostHeart.png images;
  this.missed +1;
  if (this.missed >= 5) {
    this.gameOver();
  }
}

checkForWin() {
  
}
checkForWin(): this method checks to see if the player has revealed all of
the letters in the active phrase.
}
