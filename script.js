'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');

message.textContent = '🥳 Correct Number';
number.textContent = 20;
score.textContent = 10;
guess.value = 10;