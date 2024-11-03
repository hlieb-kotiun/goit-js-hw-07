const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", inputHandler);

function inputHandler(event) {
  const inputValue = event.target.value.trim();

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
}

nameInput.addEventListener("blur", (event) => {
  (event.target.value = ""), (nameOutput.textContent = "Anonymous");
});
