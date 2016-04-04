"use strict";
const Constants = require ("../../../Constants");
const FlowstoneSlideBase = require("../setNMS/FlowstoneSlide");

class FlowstoneSlide extends FlowstoneSlideBase {
  constructor(game) {
    super(game, "Flowstone Slide", "Tenth Edition", "10E");
  }
}

module.exports = FlowstoneSlide;
