"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Upheaval extends Card {
  constructor(game) {
    super(game, "Upheaval", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Upheaval;
