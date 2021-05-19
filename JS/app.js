/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Add a click event listener to the "Start Game" button which creates a new Game
// object and starts the game by calling the startGame() method.

const game = new Game();

const beginGame = document.getElementById("btn__reset");
beginGame.addEventListener("click", console.log("start game"));
