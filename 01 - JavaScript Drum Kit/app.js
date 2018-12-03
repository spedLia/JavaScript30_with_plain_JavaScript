(function() {
    function stopTransition(e) {
        e.target.classList.remove('playing');
    }

    function playAudio(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const keyboard = document.querySelector(`.keys [data-key="${e.keyCode}"]`);

        if (audio) {

            audio.play();
            audio.currentTime = 0;
            keyboard.classList.add('playing');
            keyboard.addEventListener('transitionend', stopTransition);
        }
    }
    window.addEventListener('keydown', playAudio);
})();