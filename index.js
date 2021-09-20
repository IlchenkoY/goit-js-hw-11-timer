const daysTimer = document.querySelector('[data-value="days"]');
const hoursTimer = document.querySelector('[data-value="hours"]');
const minsTimer = document.querySelector('[data-value="mins"]');
const secsTimer = document.querySelector('[data-value="secs"]');

class CountdownTimer {
    constructor({ onTick, targetDate}) {
        this.onTick = onTick;
        this.targetDate = targetDate;
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const time = currentTime - this.targetDate;
            const timeComponents = this.getTimeComponents(time)
            this.onTick(timeComponents);
        },1000);
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

            return { days, hours, mins, secs };
        
    }

    pad(value) {
        return String(value).replace('-', '').padStart(2,'0');
    }
};

function updateTimer({ days, hours, mins, secs }) {
        daysTimer.textContent = `${days}`;
        hoursTimer.textContent = `${hours}`;
        minsTimer.textContent = `${mins}`;
        secsTimer.textContent = `${secs}`;
    }

const countdownTimer = new CountdownTimer({
    onTick: updateTimer,
    targetDate: new Date('Oct 17, 2021'),
});

countdownTimer.start();




