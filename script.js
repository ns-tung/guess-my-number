'use strict';

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const againEl = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

checkEl.addEventListener('click', function () {
  const guessNumber = Number(guessEl.value);
  if (!guessNumber) {
    messageEl.textContent = '🧐 Hmmm, no number!';
  } else if (guessNumber === secretNumber) {
    messageEl.textContent = '🥳 Correct Number!';
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = '📈 Too hight!';
    } else {
      scoreEl.textContent = score = 0;
      messageEl.textContent = '🤯 GAME OVER!'
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = '📉 Too low!';
    } else {
      scoreEl.textContent = score = 0;
      messageEl.textContent = '🤯 GAME OVER!'
    }
  }
})