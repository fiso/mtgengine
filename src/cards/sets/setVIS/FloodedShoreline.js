"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloodedShoreline extends UnimplementedCard {
  constructor (game) {
    super(game, "Flooded Shoreline", "Visions", "VIS");
  }
}

module.exports = FloodedShoreline;
