"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalClay extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Clay", "Masters 25", "A25");
  }
}

module.exports = PrimalClay;
