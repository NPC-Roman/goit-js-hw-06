const products = [
         {
             id: 1,
             img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
             name: 'Монітор',
             price: 3000,
             description: '23-дюймовий монітор з Full HD роздільною здатністю.'
         },
         {
             id: 2,
             img: 'https://img.ktc.ua/img/base/1/6/316526.jpg',
             name: 'Ноутбук',
             price: 20000,
             description: 'Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.'
         },
         {
             id: 3,
             img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
             name: 'Смартфон',
             price: 8000,
             description: 'Оснащений потрійною камерою та багатоядерним процесором.'
         },
         {
             id: 4,
             img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
             name: 'Планшет',
             price: 12000,
             description: '10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.'
         }
     ];

const container = document.querySelector('.js-products');
function createMarkup(arr) {
return arr.map(({id, img, name, price}) => ` 
<li data-id="${id}" class="item js-product-item">
<img src="${img}" alt="${name}" width="300" height="300"/>
<h2>${name}</h2>
<p>Ціна: ${price} грн.</p>
</li>`).join('')
};
createMarkup(products);
container.insertAdjacentHTML('beforeend', createMarkup(products));
container.addEventListener('click', handlerProcductClick);
function handlerProcductClick(evt) {    
    if (evt.target === evt.currentTarget){
        return
    }
    const currentProduct = evt.target.closest('.js-product-item');
    console.log('target', evt.target);
    console.log(currentProduct);
};
