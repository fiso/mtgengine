"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbundantGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Abundant Growth", "Eternal Masters", "EMA");
  }
}

module.exports = AbundantGrowth;
