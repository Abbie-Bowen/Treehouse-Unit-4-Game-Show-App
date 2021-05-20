/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Add a click event listener to the "Start Game" button which creates a new Game
// object and starts the game by calling the startGame() method.

document.getElementById("btn__reset").addEventListener("click", function () {
  const game = new Game();
  game.startGame();
});
