const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const inputText = input.value;

  if (inputText === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = inputText;
  }
});
