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

  /* @param {e} - user button click event
   * checks letter user guesses against phrase array. If correct guess, displays
   * letter element, if incorrect guess calls removeLife method. If whole phrase
   * has been correctly guessed, calls gameOver method.
   */
  handleInteraction(e) {
    e.disabled = true;

    const letter = e.textContent;

    if (this.activePhrase.checkLetter(letter)) {
      e.className = "chosen key";
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        let message = "You guessed the phrase! Great job!";
        let className = "win";
        this.gameOver(message, className);
      }
    } else if (!this.activePhrase.checkLetter(letter)) {
      e.className = "wrong key";
      this.removeLife();
    }
  }

  // increments missed guesses counter and removes one heart in visual scoreboard
  // calls gameOver method if player has guessed incorrectly 5 times.
  removeLife() {
    const liveHearts = document.querySelectorAll(".tries");
    this.missed += 1;
    if (this.missed < 5) {
      liveHearts[this.missed - 1].firstElementChild.src =
        "Images/lostHeart.png";
      liveHearts[this.missed - 1].firstElementChild.alt = "Missing heart icon";
    } else if (this.missed >= 5) {
      let message = "You ran out of hearts. Try again.";
      let className = "lose";
      this.gameOver(message, className);
    }
  }

  // checks to see if the player has correctly guessed all of the
  //letters in the active phrase.
  checkForWin() {
    const remainingLetters = this.activePhrase.remainingPhraseLetters;
    return remainingLetters.length === 0 ? true : false;
  }

  // displays the end of game messages styled with the matching className.
  gameOver(message, className) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";

    const heading = document.getElementById("game-over-message");
    heading.className = `${className}`;
    heading.textContent = `${message}`;

    this.resetGameBoard();
  }

  /* removes the li elements that contain the phrase
   * resets the heart scoreboard to five hearts
   * resets this.missed to 0
   * resets keyboard classnames
   */
  resetGameBoard() {
    const phraseElementsDiv = document.getElementById("phrase");
    phraseElementsDiv.firstElementChild.innerHTML = "";

    this.missed = 0;
    const hearts = document.querySelectorAll(".tries");
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].firstElementChild.src = "Images/liveHeart.png";
      hearts[i].firstElementChild.alt = "Heart icon";
    }

    const keys = document.querySelectorAll(".key");
    for (let i = 0; i < keys.length; i++) {
      keys[i].className = "key";
      keys[i].disabled = false;
    }
  }
}
