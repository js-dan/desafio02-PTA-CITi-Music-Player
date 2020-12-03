class Player {
  constructor({ playerId }){
    this.playerElement = document.querySelector(`#${playerId}`);
    this.controls = this.playerElement.querySelector('.controls');
    this.progressBar = this.playerElement.querySelector('.progress-bar');
    this.playBtn = this.controls.querySelector('.play');
    this.pauseBtn = this.controls.querySelector('.pause');
    this.forwardBtn = this.controls.querySelector('.forward');
    this.backwardBtn = this.controls.querySelector('.backward');
    this.audioElement = this.playerElement.querySelector('audio');

    this.handleEventListeners();
  }
  handleEventListeners(){
    this.playBtn.addEventListener('click', () => {
      this.audioElement.play();
    });

    this.pauseBtn.addEventListener('click', () => {
      this.audioElement.pause();
    });

    this.forwardBtn.addEventListener('click', () => {
      this.audioElement.currentTime += 10;
    });

    this.backwardBtn.addEventListener('click', () => {
      this.audioElement.currentTime -= 10;
    });

    this.audioElement.addEventListener('timeupdate', () => {
      const {
        currentTime,
        duration,
      } = this.audioElement;
      this.progressBar.style.width = `${100 * currentTime / duration}%`;
    });

    this.progressBar.addEventListener('click', () => {
      const progressBar = this.progressBar.getBoundingClientRect();
      const x = event.clientX;
      const progress = Math.round(((x - progressBar.left) / (progressBar.right - progressBar.left)) * 100);
      console.log(progress);
      this.audio.currentTime = (progress * this.audio.duration) / 100;
    })
  }
}
