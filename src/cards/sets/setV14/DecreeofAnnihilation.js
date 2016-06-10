"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecreeofAnnihilation extends UnimplementedCard {
  constructor (game) {
    super(game, "Decree of Annihilation", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = DecreeofAnnihilation;
