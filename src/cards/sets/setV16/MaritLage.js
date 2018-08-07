"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaritLage extends UnimplementedCard {
  constructor (game) {
    super(game, "Marit Lage", "From the Vault: Lore", "V16");
  }
}

module.exports = MaritLage;
