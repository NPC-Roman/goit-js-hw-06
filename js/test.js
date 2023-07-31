/*const title = document.querySelector('.js-title');
console.log(title);*/
const titleId = document.querySelector('#title');
console.log(titleId);
const items = document.querySelectorAll('.js-item');
console.log(items);
console.log(`Numbers of li: ${items.length}`);

const title = document.getElementsByClassName('js-title');
console.log(title);

const li = document.createElement('li');
li.textContent = 5;
li.classList.add('js-item');
console.dir(li);