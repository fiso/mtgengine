"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParadoxHaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Paradox Haze", "Time Spiral", "TSP");
  }
}

module.exports = ParadoxHaze;
