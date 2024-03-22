'use strict';

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const againEl = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');

let score = 20;
let highScore = 0;
const randomNumber = function () { return Math.trunc(Math.random() * 20) + 1 };

let secretNumber = randomNumber();

const displayText = function (selector, message) {
  selector.textContent = message;
}

checkEl.addEventListener('click', function () {

  const guessNumber = Number(guessEl.value);

  if (!guessNumber) { // When there is no input
    displayText(messageEl, '🧐 Hmmm, no number!');
  } else if (guessNumber === secretNumber) { // When player wins
    guessEl.setAttribute('disabled', '');
    displayText(numberEl, secretNumber);
    displayText(messageEl, '🥳 Correct Number!');
    numberEl.style.width = '30rem';
    bodyEl.style.backgroundColor = '#1ca000';
    if (score > highScore) {
      highScore = score;
      displayText(highScoreEl, highScore);
    }
  } else if (guessNumber !== secretNumber) { // When guess is wrong
    if (score > 1) {
      score--;
      displayText(scoreEl, score);
      displayText(messageEl, guessNumber < secretNumber ? `📈 Bigger than ${guessNumber}` : `📉 Smaller than ${guessNumber}`);
    } else {
      score = 0;
      displayText(scoreEl, score);
      numberEl.style.width = '30rem';
      displayText(numberEl, secretNumber);
      guessEl.setAttribute('disabled', '');
      bodyEl.style.backgroundColor = '#111';
      displayText(messageEl, '🤯 GAME OVER!');
    }
  }
})

againEl.addEventListener('click', function () {
  score = 20;
  guessEl.value = '';
  displayText(numberEl, '?');
  displayText(scoreEl, score);
  secretNumber = randomNumber();
  bodyEl.removeAttribute('style');
  numberEl.removeAttribute('style');
  guessEl.removeAttribute('disabled');
  displayText(messageEl, '😀 Start guessing...');
})