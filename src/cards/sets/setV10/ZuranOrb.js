"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZuranOrb extends UnimplementedCard {
  constructor (game) {
    super(game, "Zuran Orb", "From the Vault: Relics", "V10");
  }
}

module.exports = ZuranOrb;
