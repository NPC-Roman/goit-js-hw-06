const input = document.querySelector(".login-form");

input.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();

  const inputForm = {
    email: input.email.value,
    password: input.password.value,
  };

  if (input.email.value === "" || input.password.value === "") {
    return alert("Усі поля повинні бути заповнені!");
  } else console.log(inputForm);

  event.currentTarget.reset();
}
