"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Smokestack extends Card {
  constructor(game) {
    super(game, "Smokestack", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Smokestack;
