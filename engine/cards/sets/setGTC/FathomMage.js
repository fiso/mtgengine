"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FathomMage extends Card {
  constructor(game) {
    super(game, "Fathom Mage", "Gatecrash", "GTC");
  }
}

module.exports = FathomMage;
