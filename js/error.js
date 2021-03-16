// <!-- Сообщение с ошибкой загрузки изображения -->
// <template id="error">
//   <section class="error">
//     <div class="error__inner">
//       <h2 class="error__title">Ошибка загрузки файла</h2>
//       <button type="button" class="error__button">Загрузить другой файл</button>
//     </div>
//   </section>
// </template>


const main = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();

const showError = (error) => {
  const errorElement = errorTemplate.cloneNode(true);

  errorElement.querySelector('.error__title').textContent = error;

  const errorButton = errorElement.querySelector('.error__button');

  const removeError = () => {
    document.querySelector('.error').remove();
  };

  errorButton.addEventListener('click', () => {
    removeError();
  })

  errorFragment.appendChild(errorElement);
  main.appendChild(errorFragment);

}

export { showError };
