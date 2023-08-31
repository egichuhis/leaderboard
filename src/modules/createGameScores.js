import clearInputs from './clearInputs.js';
import getGameID from './getGameID.js';

const id = getGameID();
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

const createGameScore = async () => {
  const user = document.getElementById('user-input').value;
  const score = document.getElementById('score-input').value;

  const postData = { user, score };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    clearInputs();
  } catch (error) {
    throw new Error('Something went wrong, please try again', error);
  }
};

export default createGameScore;