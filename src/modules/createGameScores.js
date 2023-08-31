import Swal from 'sweetalert2';
import clearInputs from './clearInputs.js';
import getGameID from './getGameID.js';

const id = getGameID();
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

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
    Swal.showLoading();
    const response = await fetch(url, requestOptions);
    Swal.close();

    if (response.ok) {
      Toast.fire({
        icon: 'success',
        title: 'Scored posted successfully',
      });
    } else {
      throw new Error('Network response was not ok');
    }

    clearInputs();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Something went wrong, please try again',
    });
  }
};

export default createGameScore;