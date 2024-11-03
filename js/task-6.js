function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector("#controls input");
const createNumber = document.querySelector("[data-create]");
const destroyNumber = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createNumber.addEventListener("click", inputValidator);
destroyNumber.addEventListener("click", cleanArr);

function inputValidator(event) {
  let num = 30;
  const arr = [];

  const inputValue = numberInput.value;

  if (inputValue >= 1 && inputValue <= 100) {
    cleanArr();
    createBoxes();
  }

  function createBoxes(amount) {
    for (let i = 0; i < inputValue; i++) {
      arr.push(
        `<div style="background-color: ${getRandomHexColor()}; width: ${num}px; height: ${num}px;"></div>`
      );
      num += 10;
    }
  }
  boxesContainer.insertAdjacentHTML("beforeend", arr.join(""));
  numberInput.value = "";
}

function cleanArr() {
  boxesContainer.innerHTML = "";
}
