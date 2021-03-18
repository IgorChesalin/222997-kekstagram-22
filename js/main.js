import { renderPhotos } from './addpreview.js';
import { request } from './fetch.js';
import { showError } from './alerts.js';
import './editor.js';
import './effects.js';
import './validation.js';



const onSuccess = (data) => {
  renderPhotos(data.slice())
}

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть')
}

request(onSuccess, onError, 'GET')

