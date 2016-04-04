"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantGrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Growth", "Anthologies", "ATH");
  }
}

module.exports = GiantGrowth;
