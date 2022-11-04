import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btnStartTimer = document.querySelector('[data-start]');
const timerEl = document.querySelector('.timer');
const timerInput = document.querySelector('#datetime-picker')

btnStartTimer.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

   if(selectedDates[0] > Date.now() ) {
    btnStartTimer.disabled = false;
   } else {
     Notiflix.Notify.failure("Please choose a date in the future");
   };
}

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

     rootSelector.querySelector('[data-days]').textContent = this.addLeadingZero(days);
     rootSelector.querySelector('[data-hours]').textContent = this.addLeadingZero(hours);
     rootSelector.querySelector('[data-minutes]').textContent = this.addLeadingZero(minutes);
     rootSelector.querySelector('[data-seconds]').textContent = this.addLeadingZero(seconds);

    }, 1000)
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
    return String(value).padStart(2, 0);
  },

};


btnStartTimer.addEventListener('click', (e) => {
  timer.start(timerEl, new Date(timerInput.value));
  });













