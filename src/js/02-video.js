import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY_VIDEO = 'videoplayer-current-time';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

player.on(
  'timeupdate',
  throttle(function (evt) {
    const currentTime = evt.seconds;
    save(LOCALSTORAGE_KEY_VIDEO, currentTime);
  }, 1000)
);

player.setCurrentTime(load(LOCALSTORAGE_KEY_VIDEO));
