"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Firespout extends Card {
  constructor(game) {
    super(game, "Firespout", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Firespout;
