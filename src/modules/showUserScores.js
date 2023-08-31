const showUserScores = (scores) => {
  const labelsDiv = document.getElementById('labels-div');
  labelsDiv.innerHTML = '';
  const labels = scores.map((scoreObj) => {
    const label = document.createElement('label');
    label.innerHTML = `${scoreObj.user}:${scoreObj.score}`;
    return label;
  });

  labelsDiv.append(...labels);
};

export default showUserScores;
