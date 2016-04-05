"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Upheaval extends UnimplementedCard {
  constructor(game) {
    super(game, "Upheaval", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Upheaval;
