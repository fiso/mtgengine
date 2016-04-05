"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritLoop extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit Loop", "Time Spiral", "TSP");
  }
}

module.exports = SpiritLoop;
