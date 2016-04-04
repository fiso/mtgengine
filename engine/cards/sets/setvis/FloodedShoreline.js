"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FloodedShoreline extends Card {
  constructor(game) {
    super(game, "Flooded Shoreline", "Visions", "VIS");
  }
}

module.exports = FloodedShoreline;
