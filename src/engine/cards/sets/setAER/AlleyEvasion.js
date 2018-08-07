"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlleyEvasion extends UnimplementedCard {
  constructor (game) {
    super(game, "Alley Evasion", "Aether Revolt", "AER");
  }
}

module.exports = AlleyEvasion;
