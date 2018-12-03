(function() {
    const SEC_HAND = document.querySelector('.second-hand');
    const MIN_HAND = document.querySelector('.min-hand');
    const HOUR_HAND = document.querySelector('.hour-hand');

    function settingTransformRotate() {
        const NOW = new Date();
        const HOURS = NOW.getHours() - 12;
        const MINUTES = NOW.getMinutes();
        const SECONDS = NOW.getSeconds();

        const SECONDS_DEG = SECONDS * 6 + 90;
        const MINUTES_DEG = MINUTES * 6 + 90;
        const HOURS_DEG = (HOURS * 60 + MINUTES) * 0.5 + 90;
        SEC_HAND.style.transform = `rotate(${SECONDS_DEG}deg)`;
        MIN_HAND.style.transform = `rotate(${MINUTES_DEG}deg)`;
        HOUR_HAND.style.transform = `rotate(${HOURS_DEG}deg)`;
    };

    window.setInterval(settingTransformRotate, 1000);
})();