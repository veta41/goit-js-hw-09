// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Notify } from 'notiflix'

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(e.currentTarget.delay.value);
  const step = Number(e.currentTarget.step.value);
  const amount = Number(e.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
       
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
       
      })
      .catch(({ position, delay }) => {
       
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
       
      });
    delay += step;
  }
  e.currentTarget.reset()
}



function createPromise(position, delay) {
 
  return  new Promise((resolve, reject) => {

    const objPromise = {position, delay}
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(objPromise);
      } else {
        reject(objPromise);
      }
    } , delay);
    }); 
}
 



