document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicButton");

    button.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            button.textContent = "Pause Music";

        } else {

            music.pause();

            button.textContent = "Play Music";
        }

    });

});