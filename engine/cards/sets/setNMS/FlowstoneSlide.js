"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlowstoneSlide extends Card {
  constructor(game) {
    super(game, "Flowstone Slide", "Nemesis", "NMS");
  }
}

module.exports = FlowstoneSlide;
