"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VirtuesRuin extends UnimplementedCard {
  constructor (game) {
    super(game, "Virtue's Ruin", "From the Vault: Annihilation", "V14");
  }
}

module.exports = VirtuesRuin;
