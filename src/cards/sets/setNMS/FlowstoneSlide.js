"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowstoneSlide extends UnimplementedCard {
  constructor(game) {
    super(game, "Flowstone Slide", "Nemesis", "NMS");
  }
}

module.exports = FlowstoneSlide;
