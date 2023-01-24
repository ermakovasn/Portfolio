// задаем переменные
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

// говорим, что мы будем отслеживать все клики по крестику
hamburger.addEventListener('click', () => {
// будем отслеживать его по списку классов и искать актив
    menu.classList.add('active');
});

// закрыть меню
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    });

