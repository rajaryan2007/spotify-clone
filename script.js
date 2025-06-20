function playSong(filePath) {
  const player = document.getElementById('audioPlayer');
  player.src = filePath;
  player.play();
}
