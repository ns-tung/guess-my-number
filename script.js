'use strict';

document.addEventListener('contextmenu', e => e.preventDefault());

const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const guessEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const againEl = document.querySelector('.again');
const highScoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');

const rules = document.querySelector('.rules');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

let score = 100;
let highScore = 0;
const randomNumber = function () { return Math.trunc(Math.random() * 100) + 1 };

let secretNumber = randomNumber();

const displayText = function (selector, message) {
  selector.textContent = message;
}

checkEl.addEventListener('click', function () {

  const guessNumber = guessEl.value !== '0' ? Number(guessEl.value) : '0';

  if (!guessNumber) { // When there is no input
    displayText(messageEl, '🧐 Hmmm, no number!');
  } else if (guessNumber === '0' || guessNumber < 0 || guessNumber > 100) {
    displayText(messageEl, '🤔 Between 1 and 100!');
  } else if (guessNumber === secretNumber) { // When player wins
    guessEl.setAttribute('disabled', '');
    displayText(numberEl, secretNumber);
    displayText(messageEl, '🥳 Correct Number!');
    numberEl.classList.add('show');
    checkEl.classList.add('disabled');
    bodyEl.style.backgroundColor = '#147200';
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
      numberEl.classList.add('show');
      checkEl.classList.add('disabled');
      displayText(numberEl, secretNumber);
      guessEl.setAttribute('disabled', '');
      bodyEl.style.backgroundColor = '#111';
      displayText(messageEl, '🤯 GAME OVER!');
    }
  }
})

againEl.addEventListener('click', function () {
  score = 100;
  guessEl.value = '';
  displayText(scoreEl, score);
  secretNumber = randomNumber();
  bodyEl.removeAttribute('style');
  numberEl.classList.remove('show');
  numberEl.innerHTML = `<img src="/mona.gif" width="60" />`;
  guessEl.removeAttribute('disabled');
  checkEl.classList.remove('disabled');
  displayText(messageEl, '😀 Start guessing...');
})

rules.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});