"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathcultRogue extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathcult Rogue", "Gatecrash", "GTC");
  }
}

module.exports = DeathcultRogue;
