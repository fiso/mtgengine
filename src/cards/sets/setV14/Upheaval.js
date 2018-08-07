"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Upheaval extends UnimplementedCard {
  constructor (game) {
    super(game, "Upheaval", "From the Vault: Annihilation", "V14");
  }
}

module.exports = Upheaval;
