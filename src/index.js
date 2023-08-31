import './style.css';
import getGameScores from './modules/getGameScores.js';
import createNewGame from './modules/createNewGame.js';

createNewGame();

const result = 'response';
const refreshBtn = document.getElementById('refresh-btn');
const labelsDiv = document.getElementById('labels-div');
const label = document.createElement('label');
label.innerHTML = result;
labelsDiv.appendChild(label);

refreshBtn.addEventListener('click', () => getGameScores());
