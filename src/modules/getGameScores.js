import getGameID from './getGameID.js';
import showUserScores from './showUserScores.js';

const id = getGameID();
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

const getGameScores = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const userScores = data.result;
    showUserScores(userScores);
  } catch (error) {
    // return error;
  }
};

export default getGameScores;