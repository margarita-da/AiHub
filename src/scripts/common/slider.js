function slider() {
  $(".slider__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,

    prevArrow:
      '<button class="slider-button-prev" aria-label="Previous" type="button"> <img src="assets/images/next.png"></button>',
    nextArrow:
      '<button class="slider-button-next" aria-label="Next" type="button"> <img src="assets/images/next.png"> </button>',
    asNavFor: ".slider-descr__list",
  });
  $(".slider-descr__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider__list",
    focusOnSelect: true,
    arrows: false,
  });
}

function init() {
  if (document.querySelector(".slider__list")) {
    return slider();
  }
}
module.exports = init;
