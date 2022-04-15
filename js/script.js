$(document).ready(function () {
   $('.slider').slick({
      dots: true,
   });
});



$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__list').toggleClass('active');
   });
});