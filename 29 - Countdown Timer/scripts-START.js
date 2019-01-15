const buttons = document.querySelectorAll('[data-time]');
const endTime = document.querySelector('.display__end-time');
const leftTime = document.querySelector('.display__time-left');
let timerId;

function countdown(seconds) {

    clearInterval(timerId);
    const now = Date.now();
    const then = new Date(now + seconds * 1000);
    const leftSeconds = (then - now) / 1000;
    endTime.innerHTML = `I will be back in ${then.toLocaleTimeString()}`;

    timerId = setInterval(() => {
        const current = Date.now();
        const elapseSeconds = Math.round((current - now) / 1000);

        let countdownTimer = leftSeconds - elapseSeconds;

        const countdownHour = Math.floor(countdownTimer / 3600);
        countdownTimer = countdownTimer % 3600;

        const countdownMinute = Math.floor(countdownTimer / 60);
        countdownTimer = countdownTimer % 60;

        const countdownSecond = countdownTimer;

        leftTime.textContent = `${countdownHour}:${countdownMinute}:${countdownSecond}`;

        if (elapseSeconds === leftSeconds) {
            clearInterval(timerId);
        }
    }, 1000);
}

function timerClockStart(e) {
    e.preventDefault();
    const seconds = parseInt(this.dataset.time);
    return countdown(seconds);
}
buttons.forEach(button => button.addEventListener('click', timerClockStart));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(this);
    const seconds = this.querySelector('input').value * 60;
    this.reset();
    return countdown(seconds);
});