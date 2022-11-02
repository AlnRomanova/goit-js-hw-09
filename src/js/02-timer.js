import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btnStartTimer = document.querySelector('[data-start]');
const timerEl = document.querySelector('.timer');
const timerInput = document.querySelector('#datetime-picker')
const TIMER_DEADLINE = new Date(2022, 10, 3);

btnStartTimer.addEventListener('click', () => {
timer.start();
});


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if(selectedDates !== selectedDates[0]) {
      btnStartTimer.disabled = true;
      Notiflix.Notify.failure("Please choose a date in the future");
    };

    if(selectedDates === selectedDates[0]) {
      btnStartTimer.disabled = false;
    };

    console.log(selectedDates[0]);
  },
};

flatpickr (timerInput, options);

const timer = {
  intervalId: null,

  start(rootSelector, deadline) {
    this.intervalId = setInterval(() => {
     const now = new Date();
     const ms = deadline - now;

     if (ms <= 0) {
      this.stop();
      return;
     }

     const {days, hours, minutes, seconds} = this.convertMs(ms);


     rootSelector.querySelector('[data-days]').textContent = this.pad(days);
     rootSelector.querySelector('[data-hours]').textContent = this.pad(hours);
     rootSelector.querySelector('[data-minutes]').textContent = this.pad(minutes);
     rootSelector.querySelector('[data-seconds]').textContent = this.pad(seconds);

    }, 1000)
  },

  stop() {
    cleanInterval(this.intervalId);
  },

    convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return `${value}`.padStart(2, 0);
  },

};

timer.start(timerEl, TIMER_DEADLINE);


console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}