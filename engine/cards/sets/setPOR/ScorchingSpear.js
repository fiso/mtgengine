"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScorchingSpear extends UnimplementedCard {
  constructor(game) {
    super(game, "Scorching Spear", "Portal", "POR");
  }
}

module.exports = ScorchingSpear;
