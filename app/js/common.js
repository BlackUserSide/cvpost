$(function() {
  $('.carousel-asort').owlCarousel({
    loop:true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-caret-square-o-left"></i>','<i class="fa fa-caret-square-o-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });

  function carouselAsort() {
    $('.carousel-asort-item').each(function() {
      var ths  = $(this),
          thsh = ths.find('.carousel-asort-content').outerHeight();
          ths.find('.carousel-asort-image').css('min-height', thsh);
    });
  }carouselAsort();

  new WOW().init();


});
