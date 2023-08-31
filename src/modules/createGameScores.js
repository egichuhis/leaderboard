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

    const data = await response.json();
    console.log('Asimiiioo');
    console.log(data);
  } catch (error) {
    // return error;
  }
};

export default createGameScore;