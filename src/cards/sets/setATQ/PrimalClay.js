"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalClay extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Clay", "Antiquities", "ATQ");
  }
}

module.exports = PrimalClay;
