const getGameID = () => {
  const savedGameID = localStorage.getItem('gameID');

  if (savedGameID !== null) {
    const gameID = JSON.parse(savedGameID);
    return gameID;
  }
  return [];
};

export default getGameID;