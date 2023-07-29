function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const widgetColor = widget.querySelector(".color");
const widgetChangeColor = widget.querySelector(".change-color");

widgetChangeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  widgetColor.textContent = newColor;
});
