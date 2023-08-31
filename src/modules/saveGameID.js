const saveGameID = (id) => {
  localStorage.setItem('gameID', JSON.stringify(id));
};

export default saveGameID;