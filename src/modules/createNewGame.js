import saveGameID from './saveGameID.js';

const postData = { name: 'Need for Speed' };
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const createNewGame = async () => {
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
    const { result } = data;
    const idMatch = result.match(/ID:\s*(\w+)/);
    if (idMatch && idMatch[1]) {
      const extractedId = idMatch[1];
      saveGameID(extractedId);
    }
  } catch (error) {
    throw new Error('Something went wrong, please try again', error);
  }
};

export default createNewGame;