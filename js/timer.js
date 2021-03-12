let deadLine = '2021-03-14';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/1000/60/60) % 24);

    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.section-header-wrapper__form-sale__timer-hours'),
        minutes = timer.querySelector('.section-header-wrapper__form-sale__timer-minutes'),
        seconds = timer.querySelector('.section-header-wrapper__form-sale__timer-seconds');
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;
        
        if (t.hours < 10) {
            hours.textContent = "0" + t.hours;
        };
        if (t.minutes < 10) {
            minutes.textContent = "0" + t.minutes;
        };
        if (t.seconds < 10) {
            seconds.textContent = "0" + t.seconds;
        };

        if (t.total <= 0) {
            clearInterval(timeInterval);
        };
    }
}

setClock('timer', deadLine);