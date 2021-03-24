import { renderPhotos } from './addpreview.js';
import { request } from './fetch.js';
import { showError } from './alerts.js';
import { shuffleArray, debounce } from './util.js';
import './editor.js';
import './effects.js';
import './validation.js';

const filter = document.querySelector('.img-filters');
let photos = [];

function removeActiveClass() {
  let activeFilter = document.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
}

const removePhotos = () => {
  const images = document.querySelectorAll('.picture');
  if (images) {
    images.forEach(element => {
      element.remove();
    });
  }
}

const filters = {
  'filter-default': () => {
    renderPhotos(photos.slice(0, 25))
  },
  'filter-random': () => {
    renderPhotos(shuffleArray(photos.slice()).slice(0, 10));

  },
  'filter-discussed': () => {
    renderPhotos(photos.slice().sort((a, b) => {
      return b.comments.length - a.comments.length;
    }))
  },
}

const onSuccess = (data) => {
  filter.classList.remove('img-filters--inactive');
  photos = data.slice()
  renderPhotos(photos.slice(0, 25))
}

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть')
}

request(onSuccess, onError, 'GET')

const test = (evt) => {

  if (evt.target.classList.contains('img-filters__button')) {
    removeActiveClass();
    removePhotos();
    evt.target.classList.add('img-filters__button--active')
    filters[evt.target.id]()
  }
}

filter.addEventListener('click', () => { debounce(test())

})

// filter.addEventListener('click', _.debounce(test, 500))
