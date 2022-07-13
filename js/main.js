
$(document).ready(function(){

  $('.btn--apoint').on('click', function() {
    $('.modal-bg, .modal').fadeIn(200);
    $('body').css('overflow', 'hidden');
  });


  $('.modal-bg, .modal__close').on('click', function() {
    $('.modal-bg, .modal').fadeOut(300);
    $('body').css('overflowY', 'scroll');
  });
  



  $('.autoplay').slick({
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 15000,
    arrows: false,
    infinite: true,
  });

});

