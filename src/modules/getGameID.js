import createNewGame from './createNewGame.js';

const getGameID = () => {
  const savedGameID = localStorage.getItem('gameID');

  if (savedGameID) {
    const gameID = JSON.parse(savedGameID);
    return gameID;
  }
  return createNewGame();
};

export default getGameID;