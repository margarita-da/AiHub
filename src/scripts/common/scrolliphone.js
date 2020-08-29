
function scrolliphone() {
    document.addEventListener('touchmove', function (){
        var scrollTop = window.pageYOffset;
    }, false);

}
function init() {
    if (document.querySelector(".wrapper")) {
      return scrolliphone();
    }
  }
  module.exports = init;
  
