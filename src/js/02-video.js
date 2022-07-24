import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

getTimeFromStorage();

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(params) {
  localStorage.setItem(STORAGE_KEY, params.seconds);
}

function getTimeFromStorage() {
  const savedVideoTime = localStorage.getItem(STORAGE_KEY);

  if (savedVideoTime) {
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
  }
}
