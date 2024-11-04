function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeBtn = document.querySelector(".change-color");
const span = document.querySelector(".color");

changeBtn.addEventListener("click", colerChanger);

function colerChanger(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
