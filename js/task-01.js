/*const categoriesSum = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesSum}`);*/

const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
const sum = document.querySelectorAll(".item").length;

console.log(`Number of categories: ${sum}`);

items.forEach((item) => {
  const name = item.querySelector("h2").textContent;
  const itemSum = item.querySelectorAll("ul li").length;

  console.log(`Category: ${name}`);
  console.log(`Elements: ${itemSum}`);
});
