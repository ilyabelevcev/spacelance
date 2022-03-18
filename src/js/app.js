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
})