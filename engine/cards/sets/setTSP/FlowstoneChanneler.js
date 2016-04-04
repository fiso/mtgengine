"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlowstoneChanneler extends Card {
  constructor(game) {
    super(game, "Flowstone Channeler", "Time Spiral", "TSP");
  }
}

module.exports = FlowstoneChanneler;
