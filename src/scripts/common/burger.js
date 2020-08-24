function burger() {
  $(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    $(".menu").toggleClass("menu-active");
    $(".header").toggleClass("header-menu");
    $(".wrapper-bckg").toggleClass("wrapper-bckg-menu");
  });
}
function init() {
  if (document.querySelector(".burger-menu")) {
    return burger();
  }
}
module.exports = init;
