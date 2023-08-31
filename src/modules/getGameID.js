import createNewGame from './createNewGame.js';

const getGameID = () => {
  const savedGameID = localStorage.getItem('gameID');

  if (savedGameID) {
    const gameID = JSON.parse(savedGameID);
    return gameID;
  }
  createNewGame();
};

export default getGameID;