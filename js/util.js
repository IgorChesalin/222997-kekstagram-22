// ESCAPE
const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
}

const checkEsc = (evt) => {
  return evt.key === Keys.ESC || evt.key === Keys.ESCAPE;
}

// перемешиваем массив
const shuffleArray = (arr) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// таймаут запроса
const DEBOUNCE_INTERVAL = 500

const debounce = function (cb) {
  let lastTimeout = null;

  return (...args) => {
    // const parameters = arguments;

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(() => {
      cb.apply(null, ...args);
    }, DEBOUNCE_INTERVAL);
  };
};

// const test = () => {
//   console.log('Hi')
// }

// debounce(test())

// function debounce(f, ms) {

//   let isCooldown = false;

//   return function() {
//     if (isCooldown) return;

//     f.apply(this, arguments);

//     isCooldown = true;

//     setTimeout(() => isCooldown = false, ms);
//   };

// }



// function debounce_leading(func, timeout = 5000){
//   let timer;
//   return (...args) => {
//     if (!timer) {
//       func.apply(this, args);
//     }
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       timer = undefined;
//     }, timeout);
//   };
// }

export { checkEsc, shuffleArray, debounce };
