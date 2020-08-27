// import "slick-carousel";
// const slider = require("./common/slider");
const btnMore = require("./common/btnMore");
const burger = require("./common/burger");
const clickForm = require("./common/clickForm");
const scrollDown = require("./common/scrollDown");
const btnUp = require("./common/btnUp");
import AOS from "aos";

$(document).ready(function () {
  btnMore();
  burger();
  clickForm();
  scrollDown();
  AOS.init();
  btnUp();
});
