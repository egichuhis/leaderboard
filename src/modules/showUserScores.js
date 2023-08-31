const showUserScores = (scores) => {
  const labelsDiv = document.getElementById('labels-div');
  labelsDiv.innerHTML = '';
  scores.forEach((scoreObj) => {
    const label = document.createElement('label');
    label.innerHTML = `${scoreObj.user}:${scoreObj.score}`;
    labelsDiv.appendChild(label);
  });
};

export default showUserScores;
