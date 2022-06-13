
const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop : document.querySelector('button[data-stop]'),
}

let intervalId = null;

refs.btnStart.addEventListener('click', onchangeColor);
refs.btnStop.addEventListener('click', onBtnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onchangeColor() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()
}, 1000);
refs.btnStart.disabled = true;
refs.btnStop.disabled = false;
}

function onBtnStop() {
  clearInterval(intervalId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}