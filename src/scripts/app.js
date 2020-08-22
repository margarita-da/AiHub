// import "slick-carousel";
// const slider = require("./common/slider");
const btnMore = require("./common/btnMore");
const burger = require("./common/burger");
const hoverInfo = require("./common/hoverInfo");
const clickForm = require("./common/clickForm");
import AOS from "aos";

$(document).ready(function () {
  btnMore();
  burger();
  hoverInfo();
  clickForm();
  AOS.init();
});
