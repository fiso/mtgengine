"use strict";
const Constants = require ("../../../Constants");
const FlowstoneSlideBase = require("../setNMS/FlowstoneSlide");

class FlowstoneSlide extends FlowstoneSlideBase {
  constructor(game) {
    super(game, "Flowstone Slide", "Ninth Edition", "9ED");
  }
}

module.exports = FlowstoneSlide;
