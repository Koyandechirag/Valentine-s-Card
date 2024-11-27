let play = document.getElementById("container");
let audio = new Audio("tone.mpeg");
let isPlaying = false; // Flag to track the audio status

function toggleMusic() {
    if (isPlaying) {
        audio.pause(); // Pause the music if it's currently playing
    } else {
        audio.play(); // Play the music if it's currently paused
    }
    isPlaying = !isPlaying; // Toggle the flag
}

play.addEventListener("click", toggleMusic);
