import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve,reject) =>{
    if(shouldResolve){
      setTimeout(() => resolve({position, delay}), delay);
    }else{
      setTimeout(() => reject({position, delay}), delay);
    }
  })
};

function handleSubmit (event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  let numDelay = Number(delay.value);

  for (let i = 1 ; i <= amount.value; i++) {
    createPromise(i, numDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
    numDelay += Number(step.value);
  }
};
