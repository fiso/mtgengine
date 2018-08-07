"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloodedWoodlands extends UnimplementedCard {
  constructor (game) {
    super(game, "Flooded Woodlands", "Ice Age", "ICE");
  }
}

module.exports = FloodedWoodlands;
