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
let secretNumber = Math.trunc(Math.random() * 20) + 1;

checkEl.addEventListener('click', function () {

  const guessNumber = Number(guessEl.value);

  if (!guessNumber) { // When there is no input
    messageEl.textContent = '🧐 Hmmm, no number!';
  } else if (guessNumber === secretNumber) { // When player wins
    messageEl.textContent = '🥳 Correct Number!';
    bodyEl.style.backgroundColor = '#1ca000';
    numberEl.textContent = secretNumber;
    numberEl.style.width = '30rem';
  } else if (guessNumber > secretNumber) { // When guess is too high
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = '📈 Too hight!';
    } else {
      scoreEl.textContent = score = 0;
      messageEl.textContent = '🤯 GAME OVER!'
    }
  } else if (guessNumber < secretNumber) { // When guess is too low
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

againEl.addEventListener('click', function () {
  scoreEl.textContent = score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageEl.textContent = 'Start guessing ...';
  guessEl.value = '';
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';
  bodyEl.style = '#123456';
})