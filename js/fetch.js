import { renderPhotos } from './addpreview.js';
import { showError } from './error.js';

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    renderPhotos(photos);
  })
  .catch(() => {
    alert('server error');
  })



const uploadForm = document.querySelector('.img-upload__form');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch(
    'https://22.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {

      } else {
        throw new Error();
      }


    })
    .catch(() => {
      showError('Ошибка, попробуйте позже')
    })

})





