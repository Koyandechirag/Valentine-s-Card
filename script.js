let play = document.getElementById("container");

function playMusic() {
    let audio = new Audio("tone.mpeg");
    audio.play();
}
play.addEventListener("click", playMusic);