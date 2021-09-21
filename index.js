class CountdownTimer {
    constructor({targetDate,selector}) {
        this.timerEl = document.querySelector(selector);
        this.targetDate = targetDate;
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const time = currentTime - this.targetDate;
            this.getTimeComponents(time);
        },1000);
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return this.setTimer({ days, hours, mins, secs });;
        
    }

    setTimer(timeComponents) {
        const valuesArr = this.timerEl.querySelectorAll('.value');
        valuesArr.forEach(el => {
            el.textContent = timeComponents[el.dataset.value];
        });
    }

    pad(value) {
        return String(value).replace('-', '').padStart(2,'0');
    }
};

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Oct 17, 2021'),
});

countdownTimer.start();




