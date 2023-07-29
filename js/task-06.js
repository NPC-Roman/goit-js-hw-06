const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputLength = input.getAttribute("data-length");
  const presentLength = input.value.length;

  if (presentLength === parseInt(inputLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
