"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Growth", "Commander Anthology", "CMA");
  }
}

module.exports = PrimalGrowth;
