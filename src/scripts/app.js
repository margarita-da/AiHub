// import "slick-carousel";
// const slider = require("./common/slider");
const btnMore = require("./common/btnMore");
const burger = require("./common/burger");
import AOS from "aos";

$(document).ready(function () {
  btnMore();
  burger();
  AOS.init();
});
