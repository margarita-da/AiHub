function slider() {
  $(".slider-list").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".slider-control__wrap-left"),
    nextArrow: $(".slider-control__wrap-right"),
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".card-slider").slick({
    infinite: true,
    dots: true,
    fade: true,
    cssEase: "linear",
    dotsClass: "fr-screen__footer",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".slider-control__wrap-img-left"),
    nextArrow: $(".slider-control__wrap-img-right"),
    customPaging: function (slider, index) {
      var image = $(slider.$slides[index]).find(".fr-screen__item").data("src");
      return (
        '<button class="tab"> <img class="dots-logo" src="' +
        image +
        '"></button>'
      );
    },
  });
}

function init() {
  if (document.querySelector(".slider-list")) {
    return slider();
  }
}
module.exports = init;
