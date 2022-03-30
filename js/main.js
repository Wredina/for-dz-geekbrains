const products = [
    {id: 1, title: 'Notebook', img: '#', price: 2000},
    {id: 2, title: 'Mouse', img: '#', price: 20},
    {id: 3, title: 'Keyboard', img: '#', price: 200},
    {id: 4, title: 'Gamepad', img: '#', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (itemEl) => {
    return `<div class="product-item">
                <h3>${itemEl.title}</h3>
                <img src = ${itemEl.img}, alt = 'тут картинка'>
                <p>${itemEl.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    // запятая после каждого товара из-за того, что по умолчанию масивы
    // отделяются друг от друга запятой. Поэтому нужно либо объеденить
    // массивы, либо перевести их в строки. 
    const productsList = list.map(item => renderProduct(item)).join('');//вариант один
    // вариант два (но он длинее)
    // let productArr = '';
    // for (let i = 1; i < productsList.length; i++){
    //    productArr += productsList[0].concat(productsList[i]);
    // }; 
    // console.log (productArr);
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList; // productArr
};

renderPage(products);

// 1. Добавьте стили для верхнего меню, товара, списка товаров и кнопки
//  вызова корзины.
// 2. Добавьте значения по умолчанию для аргументов функции. 
// Как можно упростить или сократить запись функций?
// 3. *Сейчас после каждого товара на странице выводится запятая.
//  Из-за чего это происходит? Как это исправить? 