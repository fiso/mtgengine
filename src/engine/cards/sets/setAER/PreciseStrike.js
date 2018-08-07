"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PreciseStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Precise Strike", "Aether Revolt", "AER");
  }
}

module.exports = PreciseStrike;
