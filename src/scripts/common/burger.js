function burger() {
  $(".burger-menu").click(function () {
    const distance = document
      .querySelector(".burger-menu")
      .getBoundingClientRect();
    const left = distance.left;
    const top = distance.top;
    console.log(left, top);
    // $(this).toggleClass("menu-on");
    $(".menu").toggleClass("menu-active");
    $(".burger-menu").hide();
    $(".menu-close").toggleClass("menu-close-active");
    $(".menu-close-active").css({ left: left + "px", top: 15 + top + "px" });
  });
  $(".menu-close, .block__menu__close").on("click", function () {
    $(".burger-menu").show();
    $(".menu-close").toggleClass("menu-close-active");
    $(".menu").toggleClass("menu-active");
  });
}
function init() {
  if (document.querySelector(".burger-menu")) {
    return burger();
  }
}
module.exports = init;
