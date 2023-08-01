/*const title = document.querySelector('.js-title');
console.log(title);
const titleId = document.querySelector('#title');
console.log(titleId);
const items = document.querySelectorAll('.js-item');
console.log(items);
console.log(`Numbers of li: ${items.length}`);
const title = document.getElementsByClassName('js-title');
console.log(title);
const list = document.querySelector('.js-list');

const li = document.createElement('li');
li.textContent = 5;
li.classList.add('js-item');

const li2 = document.createElement('li');
li2.textContent = 6;
li2.classList.add('js-item');
//console.log(li['classList']);

const liItems = [li, li2];

list.append(...liItems);

console.dir(list);

list.insertAdjacentHTML('beforeend', li)
const li = `<li class="js-item">5</li>`;

let markup = '';
for (let i = 1; i <= 3; i += 1) {
    markup += `<li class="js-item">${list.children.length + i}</li>` 
    console.log(list.children[i]);
}
list.insertAdjacentHTML('beforeend', markup);

const list = document.querySelector('.js-list');

list.style.listStyle = 'none';

const input = document.querySelector('.js-query');
console.dir(input);*/

const container = document.querySelector('.js-container');
container.addEventListener('click', handlerClick);
function handlerClick(evt) {
    //console.log('currentTarget', evt.currentTarget);
    //console.log('Target', evt.target);
//if (evt.currentTarget === evt.target) {
    //return;
if (!evt.target.classList.contains('js-box')){
    return;
};
console.log('Target', evt.target);
};