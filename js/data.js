import { getRandomInt, getRandomElementArr } from './util.js';

let photos = [];
const numberOfPhotos = 25;
const likes = {
  MIN: 15,
  MAX: 200,
}

const names = [
  'Дима',
  'Тимофей',
  'Алексей',
  'Мария',
  'Кристина',
  'Вика',
  'Игорь',
  'Виктор',
  'Катя',
  'Денис',
];

const descriptionPhoto = [
  'Без фильтров',
  'Новая камера',
  'Зацените фотку!',
  'Хороший ракурс',
  'Просто так',
  'Из архива',
];

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
]

const addPhotos = () => {
  for (let i = 0; i < numberOfPhotos; i++) {
    photos.push({
      id: [i],
      url: 'photos/' + [i] + '.jpg',
      description: getRandomElementArr(descriptionPhoto),
      likes: getRandomInt(likes.MIN, likes.MAX),
      comments: {
        id: getRandomInt(0, 999),
        avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
        message: getRandomElementArr(comments),
        name: getRandomElementArr(names),
      },
    })
  }
}

export { addPhotos };
