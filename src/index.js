import { startBtn, wordP } from "./dom";
import { getRandomWord } from "./lib";

let randomWord = "null";
let wordDisplay = "";

function handleKeyDown(event) {
  console.log(event.key);
}

function manageWordDisplay() {
  // TODO: Check the key pressed against the random word
  // TODO: If the key presssed is in the random word, update the word display
  randomWord.split("").forEach((char, index) => {
    if (char === letter.toLowerCase()) {
      console.log("letter is in the word", index);
    }
  });
}

function init() {
  randomWord = getRandomWord();
  wordDisplay = randomWord.replace(/./g, "_");

  wordP.textContent = wordDisplay;
}

startBtn.addEventListener("click", () => {
  init();
});

document.addEventListener("keydown", handleKeyDown);

console.log(randomWord);
