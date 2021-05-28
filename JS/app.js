/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/* click event listener on the "Start Game" button
 * creates a new Game object and calls startGame()
 */
document.getElementById("btn__reset").addEventListener("click", function () {
  game = new Game();
  game.startGame();
});

/* click event listner for the onscreen keyboard. Calls handleInteraction()
 * and passes @param {e} -- event
 */
document.getElementById("qwerty").addEventListener("click", (e) => {
  if (game && e.target.className === "key") {
    game.handleInteraction(e.target);

    /*code below is a work-around for Firefox blur handling from
     * Robert Manolis - FSJS Coordinator at Treehouse
     */
    if (navigator.userAgent.includes("Firefox")) {
      document.activeElement.blur();
      document.querySelector("body").focus();
    }
  }
});

// event listener so users can guess letters using the keyboard
document.addEventListener("keydown", (e) => {
  const string = e.code;
  if (game && string.includes("Key")) {
    const key = string.charAt(string.length - 1).toLowerCase();
    const buttons = document.querySelectorAll(".key");
    for (const buttonEl of buttons) {
      if (buttonEl.textContent === key && buttonEl.className !== "chosen") {
        e = buttonEl;
      }
    }
    game.handleInteraction(e);
  }
});
