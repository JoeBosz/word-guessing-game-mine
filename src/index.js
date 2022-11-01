import { lossesP, resetBtn, seconds, startBtn, winsP, wordP } from "./dom";
import { getRandomWord, WORDS } from "./lib";

function init() {
  const randomWord = getRandomWord();
  console.log(randomWord);

  // TODO: get a random word
  wordP.textContent = randomWord;
}

startBtn.addEventListener("click", () => {
  init();
});
