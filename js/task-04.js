let minusBtn = document.querySelector('[data-action="decrement"]');
let plusBtn = document.querySelector('[data-action="increment"]');
let value = document.querySelector("#value");
let counterValue = 0;

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

plusBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
