function btnMore() {
  $(".news_all__item").slice(0, 4).show();
  $(".news_all__btn-more").on("click", function (e) {
    e.preventDefault();
    $(".news_all__item:hidden").slice(0, 4).slideDown();
    if ($(".news_all__item:hidden").length == 0) {
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
