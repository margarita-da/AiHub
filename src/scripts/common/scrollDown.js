function scroll() {
  $(".scroll").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
}

function init() {
  if (document.querySelector(".scroll")) {
    return scroll();
  }
}
module.exports = init;
