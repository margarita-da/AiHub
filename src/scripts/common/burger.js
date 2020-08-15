function burger() {

  $(".burger-menu").click(function () {
	  $(this).toggleClass("menu-on");
  });
    
}
function init() {
  if (document.querySelector(".burger-menu")) {
    return burger();
  }
}
module.exports = init;
