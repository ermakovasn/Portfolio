// задаем переменные
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeWindow = document.querySelector('.menu__overlay');

// говорим, что мы будем отслеживать все клики по крестику
hamburger.addEventListener('click', () => {
// будем отслеживать его по списку классов и искать актив
    menu.classList.add('active');
});
// закрыть меню кликом на другую область
closeWindow.addEventListener('click', () => {
    // будем отслеживать его по списку классов и искать актив
        menu.classList.remove('active');
    });

// закрыть меню
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    });


const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');
// каждый элемент из переменной counters перебирается
counters.forEach( (item, i) => {
    // чтобы определиться к определенному элементу по номеру, когда мы это значение вытащили из html, мы его перекладываем в стиль линии
    lines[i].style.width = item.innerHTML;
});




  
