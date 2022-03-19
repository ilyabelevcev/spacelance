import * as flsFunctins from "./modules/functions.js"
import $ from "jquery"
import "slick-carousel"

flsFunctins.isWebp();

$(".carousel").slick({
   infinite: false,
   slidesToShow: 3, 
   speed: 800,
   slidesToScroll: 1,
   centerPadding: '0',
   prevArrow: $('.prev'),
   nextArrow: $('.next'),
   appendArrows: $('.works__slider-btn'),
   responsive: [
      {
         breakpoint: 1199,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
         }
      },
      // {
      //    breakpoint: 600,
      //    settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2
      //    }
      // },
      // {
      //    breakpoint: 480,
      //    settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //    }
      // }
   ]
})

$(document).ready(function() {
   $('.burger-menu').click(function() {
      $('.burger-menu').toggleClass('open-menu')
   });
});