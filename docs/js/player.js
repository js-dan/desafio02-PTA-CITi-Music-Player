const playerElement = document.querySelector('#my-player');
const controls = playerElement.querySelector('.controls');

const progressBar = playerElement.querySelector('.progress-bar');

const playBtn = controls.querySelector('.play');
const pauseBtn = controls.querySelector('.pause');
const forwardBtn = controls.querySelector('.forward');
const backwardBtn = controls.querySelector('.backward');
const bar = controls.querySelector('.progress-bar');

const audioElement = playerElement.querySelector('audio');


playBtn.addEventListener('click', () => {
  audioElement.play();
});

pauseBtn.addEventListener('click', () => {
  audioElement.pause();
});

forwardBtn.addEventListener('click', () => {
  audioElement.currentTime += 10;
});

backwardBtn.addEventListener('click', () => {
  audioElement.currentTime -= 10;
});

audioElement.addEventListener('timeupdate', () => {
  const {
    currentTime,
    duration,
  } = audioElement;

  progressBar.style.width = `${100 * currentTime / duration}%`;
});

progressBar.addEventListener('click', () => {
  const progressBar = progressBar.getBoundingClientRect();
  const x = event.clientX;
  const progress = Math.round(((x - progressBar.left) / (progressBar.right - progressBar.left)) * 100);
  console.log(progress);
  audio.currentTime = (progress * audio.duration) / 100;
});

