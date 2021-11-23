import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE = 'videoplayer-current-time';

//eventListener
player.on('timeupdate', throttle(timeUpdate, 2000));
function timeUpdate(evtent) {
  localStorage.setItem(LOCALSTORAGE, evtent.seconds);
}

//localStorageSaveUserTime
player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
