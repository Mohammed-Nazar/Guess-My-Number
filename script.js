'use strict';

let secnumber = Math.trunc(Math.random() * 20 + 1);

const check = document.querySelector('.check');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const scoreEl = document.querySelector('.score');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const highscoreEl = document.querySelector('.highscore');

let highscore = 0;
let score = 20;
scoreEl.innerHTML = score;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const againFun = () => {
  score = 20;
  scoreEl.innerHTML = score;
  secnumber = Math.trunc(Math.random() * 20 + 1);
  number.innerHTML = '?';
  body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  guess.value = '';
  check.disabled = false;
};

check.addEventListener('click', () => {
  if (Number(guess.value) === secnumber) {
    displayMessage(`😮 That's correct`);
    number.innerHTML = secnumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '15rem';
    check.disabled = true;
    if (highscore < score) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (
    Number(guess.value) !== secnumber &&
    guess.value !== '' &&
    Number(guess.value) > 0
  ) {
    if (score > 0) {
      displayMessage(
        Number(guess.value) > secnumber ? `😅 Too Hight.` : `😅 Too Low.`
      );
      score--;
      scoreEl.innerHTML = score;
    } else {
      displayMessage(`😥 GameOver.`);
    }
  }
  // } else if (Number(guess.value) > secnumber && guess.value !== '') {
  //   message.innerHTML = `😅 Too Hight.`;
  //   if (score > 0) {
  //     score--;
  //     scoreEl.innerHTML = score;
  //   } else {
  //     message.innerHTML = `😥 GameOver.`;
  //   }
  // } else if (Number(guess.value) < secnumber && guess.value !== '') {
  //   message.innerHTML = `😅 Too Low.`;
  //   if (score > 0) {
  //     score--;
  //     scoreEl.innerHTML = score;
  //   } else {
  //     message.innerHTML = `😥 GameOver.`;
  //   }
  // }
  if (guess.value === '') {
    displayMessage('😡 Type a Number.');
  }
  if (Number(guess.value) <= 0) {
    displayMessage('😡 Put a Number above ZERO.');
    guess.value = '';
    console.log(guess.value);
  }
});

again.addEventListener('click', () => {
  againFun();
});
