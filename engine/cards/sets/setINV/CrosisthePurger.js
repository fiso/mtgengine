"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrosisthePurger extends Card {
  constructor(game) {
    super(game, "Crosis, the Purger", "Invasion", "INV");
  }
}

module.exports = CrosisthePurger;
