"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScorchingLava extends UnimplementedCard {
  constructor(game) {
    super(game, "Scorching Lava", "Invasion", "INV");
  }
}

module.exports = ScorchingLava;
