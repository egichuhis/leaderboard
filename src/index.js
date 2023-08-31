import './style.css';
import getGameScores from './modules/getGameScores.js';
import createNewGame from './modules/createNewGame.js';
import createGameScore from './modules/createGameScores.js';

const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');

window.onload = () => {
  createNewGame();
};

refreshBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getGameScores();
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  createGameScore();
});
