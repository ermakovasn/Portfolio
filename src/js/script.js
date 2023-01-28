$(document).ready(function () {
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

function valideForms(form) {
    $('form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
              },
            checkbox: "required",
            email: {
              required: true,
              email: true
            },
          },
          messages: {
            name: {
                required: "We need your name",
                minlength: jQuery.validator.format("At least {2} characters required!")
              },
            email: {
              required: "We need your email address to contact you",
              email: "Your email address must be in the format of name@domain.com"
            }
          }
    }); 
};
valideForms('form');
});


$('form').submit(function(e) {
    e.preventDefault();

    if ($(this).valid()) {   
        

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
            $('[data-modal=consultation]').on('click', function(){
                $('.overlay, #thanks').fadeIn('slow');
            });
            
            $('.modal__close').on('click',function(){
                $('.overlay, #thanks').fadeOut('slow');
                });
        });
        
        };
    return false
    
});
    
$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn(); 
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
// подключаем по инструкции wow.js
new WOW().init();

// const checkbox = document.getElementById("checkboxId");

// document.getElementById("checkboxId").addEventListener("submit", function(event){
//   event.preventDefault();
//   if(!validateForm()){
//     // Change the checkbox's color to red if validation fails
//     checkbox.style.borderColor = "red";
//   }
//   else{
//     // Perform other actions if validation is successful
//     checkbox.style.borderColor = "black";
//     // Perform AJAX request or other actions
//   }
// });

// function validateForm() {
//   // Check if the checkbox is checked
//   if(!checkbox.checked){
//     return false;
//   }
//   // Perform other validation and return true if successful, false if not
//   return true;
// }





  
