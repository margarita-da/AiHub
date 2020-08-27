function btnMore() {
  $(".more-js").slice(0, 16).show();
  if ($(".more-js:hidden").length == 0) {
    $(".news_all__btn-more").hide();
  }
  $(".news_all__btn-more").on("click", function (e) {
    e.preventDefault();
    $(".more-js:hidden").slice(0, 16).slideDown();
    if ($(".more-js:hidden").length == 0) {
      $(".news_all__btn-more").hide();
    }
  });
}
function init() {
  if (document.querySelector(".news_all__btn-more")) {
    return btnMore();
  }
}
module.exports = init;
