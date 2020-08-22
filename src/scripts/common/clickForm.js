function clickForm() {
  $(".click-form").on("click", function (e) {
    $(".block-form").toggleClass("block-form-show");
  });
  $(".block-form-close").on("click", function (e) {
    $(".block-form").toggleClass("block-form-show");
  });
}
function init() {
  if (document.querySelector(".block-form")) {
    return clickForm();
  }
}
module.exports = init;
