"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScorchingSpear extends UnimplementedCard {
  constructor (game) {
    super(game, "Scorching Spear", "Starter 1999", "S99");
  }
}

module.exports = ScorchingSpear;
