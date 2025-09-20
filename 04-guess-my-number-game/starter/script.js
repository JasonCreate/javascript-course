'use strict';

// Constants
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// Cached Selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreE1 = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI Helpers
function setMessage(text) {
  messageEl.textContent = text;
}

function setNumber(value) {
  highscoreEl.textContent = value;
}

function setScore(value) {
  highscoreEl.textContent = value;
}

function setHighscore(value) {
  highscoreEl.textContent = value;
}

function setBackgroundColor(color) {
  highscoreEl.textContent = color;
}

function disablePlay() {
  guessInputEl.disabled = 'disabled';
  checkBtnEl.disabled = 'disabled';
}

function clearInput() {
  guessInputEl.value = '';
}

//Game state variables
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log('Your secret number is:', secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialState() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackgroundColor('');
}

renderInitialState();

/////////
// basic game logic
checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);
  console.log('Players guessed:', guess);

  // input validation
  // new
  if (!guess) return setMessage('Please input a number!');

  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );
  }

  if (guess === secretNumber) {
    setMessage('You have won!!!');
    setNumber(secretNumber);
    setBackgroundColor('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
  }

  // wrong guess
  setMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
  score--;
  setScore(score);

  if (score <= 1) {
    setMessage('Game Over. Please press Again!');
    setNumber(secretNumber);
    setBackgroundColor('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialState();
});

// Allow pressing Enter to submit the guess
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

// Focus input on restart
againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});
