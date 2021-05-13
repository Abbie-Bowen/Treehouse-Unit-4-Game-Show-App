/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.lowerCase;
  }

  /* adds letter placeholders when game begins*/

  // Each letter is presented by an empty box, one li element for each letter.
  // See the example_phrase_html.txt file for an example of what the rendered HTML
  // for a phrase should look like when the game starts, including any id or class
  // attributes needed. When the player correctly guesses a letter, the empty box
  // is replaced with the matched letter (see the showMatchedLetter() method below).
  // Make sure the phrase displayed on the screen uses the letter CSS class for
  // letters and the space CSS class for spaces.
  addPhraseToDisplay() {}

  /*reveals the correct letters the player has guessed*/

  // To reveal the matching letter(s), select all of the letter DOM elements
  // that have a CSS class name that matches the selected letter and replace each
  // selected element's hide CSS class with the show CSS class.
  checkLetter() {}
}
