"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScorchingMissile extends UnimplementedCard {
  constructor(game) {
    super(game, "Scorching Missile", "Odyssey", "ODY");
  }
}

module.exports = ScorchingMissile;
