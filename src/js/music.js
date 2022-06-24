let sound = new Audio('../src/audio/song1.mp3');

playBtn.addEventListener("click", ()=>{
    sound.play();
});
pauseBtn.addEventListener("click", ()=>{
    sound.pause();
});