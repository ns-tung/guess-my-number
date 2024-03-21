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
    displayText(messageEl, '🥳 Correct Number!');
    bodyEl.style.backgroundColor = '#1ca000';
    displayText(numberEl, secretNumber);
    numberEl.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      displayText(highScoreEl, highScore);
    }
  } else if (guessNumber !== secretNumber) { // When guess is wrong
    if (score > 1) {
      score--;
      displayText(scoreEl, score);
      displayText(messageEl, guessNumber > secretNumber ? '📈 Too hight!' : '📉 Too low!');
    } else {
      score = 0;
      displayText(scoreEl, score);
      displayText(messageEl, '🤯 GAME OVER!');
    }
  }
})

againEl.addEventListener('click', function () {
  score = 20;
  guessEl.value = '';
  secretNumber = randomNumber();
  displayText(numberEl, '?');
  displayText(scoreEl, score);
  displayText(messageEl, '😀 Start guessing...');
  numberEl.style.width = '15rem';
  bodyEl.style.backgroundColor = '#123456';
})