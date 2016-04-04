"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DecreeofAnnihilation extends Card {
  constructor(game) {
    super(game, "Decree of Annihilation", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = DecreeofAnnihilation;
