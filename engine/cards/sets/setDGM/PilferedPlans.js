"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PilferedPlans extends UnimplementedCard {
  constructor(game) {
    super(game, "Pilfered Plans", "Dragon's Maze", "DGM");
  }
}

module.exports = PilferedPlans;
