const input = document.querySelector(".login-form");

input.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();

  const inputForm = {
    Email: input.email.value,
    Password: input.password.value,
  };

  if (input.email.value === "" || input.password.value === "") {
    return alert("Усі поля повинні бути заповнені!");
  } else console.log(inputForm);

  event.currentTarget.reset();
}
