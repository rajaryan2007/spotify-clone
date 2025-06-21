const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volumeBar = document.querySelector(".volume-bar");
const playButton = document.getElementById("button1");


function playAudio() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = '<img src="assets/pause-button-made-up-of-two-vertical-lines-svgrepo-com.svg" class="control-icon big"/>';
  } else {
    audio.pause();
    playButton.innerHTML = '<img src="assets/play-button-svgrepo-com.svg" class="control-icon big"/>';
  }
}

function playSong(src, title = "Unknown Title", artist = "Unknown Artist", cover = "assets/default.jpg") {
  audio.src = src;
  audio.play();
  playButton.innerHTML = '<img src="assets/pause-button-made-up-of-two-vertical-lines-svgrepo-com.svg" class="control-icon big"/>';


  document.getElementById("song-title").textContent = title;
  document.getElementById("artist-name").textContent = artist;
  document.getElementById("cover-img").src = cover;
}


audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration)) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.value = percent;

    
    const mins = Math.floor(audio.currentTime / 60);
    const secs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
    currentTimeEl.textContent = `${mins}:${secs}`;

    const dmins = Math.floor(audio.duration / 60);
    const dsecs = Math.floor(audio.duration % 60).toString().padStart(2, '0');
    durationEl.textContent = `${dmins}:${dsecs}`;
  }
});


progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});


volumeBar.addEventListener("input", () => {
  audio.volume = volumeBar.value / 100;
});
