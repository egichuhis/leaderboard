const showUserScores = (scores) => {
  const labelsDiv = document.getElementById('labels-div');
  labelsDiv.innerHTML = '';
  const labels = scores.map((scoreObj, index) => {
    const label = document.createElement('label');
    label.innerHTML = `${index + 1}.&nbsp;&nbsp;${scoreObj.user}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${scoreObj.score}`;
    return label;
  });

  labelsDiv.append(...labels);
};

export default showUserScores;
