
$(function(){

$('.header__slider').not('.slick-initialized').slick({ 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,        
        cssEase: 'linear'
});


  
  $('.partners__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });

  $('.menu__btn').click(function (event) {
    $('.menu__btn,.menu').toggleClass('active');
    $('body').toggleClass('lock');
});
 
AOS.init();

})
