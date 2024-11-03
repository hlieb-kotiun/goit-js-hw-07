const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFoo);

function handleFoo(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }

  const emailValue = event.target.elements.email.value.trim();
  const passwordValue = event.target.elements.password.value.trim();

  const obj = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(obj.email);
  console.log(obj.password);
  form.reset();
}
