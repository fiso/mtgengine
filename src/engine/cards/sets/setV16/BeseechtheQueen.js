"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeseechtheQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Beseech the Queen", "From the Vault: Lore", "V16");
  }
}

module.exports = BeseechtheQueen;
