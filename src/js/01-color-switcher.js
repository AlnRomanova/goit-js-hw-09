const bodyElColor = document.body;
const colorBtnStart = document.querySelector('[data-start]');
const colorBtnStop = document.querySelector('[data-stop]');
colorBtnStop.disabled = true;

let timerId = null;


colorBtnStart.addEventListener("click", () => {
  colorBtnStart.disabled = true;
  colorBtnStop.disabled = false;
  timerId = setInterval(() => {
  return bodyElColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

colorBtnStop.addEventListener("click", () => {
  colorBtnStop.disabled = true;
  colorBtnStart.disabled = false;
  clearInterval(timerId);

});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

