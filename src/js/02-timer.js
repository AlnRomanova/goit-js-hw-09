import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const btnStartTimer = document.querySelector('[data-start]');
// const timerEl = document.querySelector('.timer');
const timerInput = document.querySelector('#datetime-picker')
// const TIMER_DEADLINE = new Date(2022, 10, 3);
btnStartTimer.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   console.log(selectedDates[0])

   if(selectedDates[0] > Date.now() ) {
    btnStartTimer.disabled = false;
   } else {
     Notiflix.Notify.failure("Please choose a date in the future");
   };
}

};

flatpickr (timerInput, options);

const timer = {
  start()  {
    const startTime = Date.now();
    setInterval(() => {
    const currentTime = Date.now();
    const ms = currentTime - startTime;

     if (ms <= 0) {
      stop();
      return;
     };

    const { days, hours, minutes, seconds } = convertMs(ms)
   console.log(`${days}::${hours}::${minutes}::${seconds}`)

    }, 1000);

  },

};

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
};


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


btnStartTimer.addEventListener('click', (e) => {
  timer.start();
  });


  // start(rootSelector, deadline) {

  //   this.intervalId = setInterval(() => {
  //    const now = new Date();
  //    const ms = deadline - now;

  //    if (ms <= 0) {
  //     this.stop();
  //     return;
  //    }

  //    const {days, hours, minutes, seconds} = this.convertMs(ms);

  //    console.log({days, hours, minutes, seconds})

  //    rootSelector.querySelector('[data-days]').textContent = this.addLeadingZero(days);
  //    rootSelector.querySelector('[data-hours]').textContent = this.addLeadingZero(hours);
  //    rootSelector.querySelector('[data-minutes]').textContent = this.addLeadingZero(minutes);
  //    rootSelector.querySelector('[data-seconds]').textContent = this.addLeadingZero(seconds);

  //   }, 1000)
  // },










