let sound = new Audio('../audio/song1.mp3');

playBtn.addEventListener("click", ()=>{
    sound.play();
});
pauseBtn.addEventListener("click", ()=>{
    sound.pause();
});