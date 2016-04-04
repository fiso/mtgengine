"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DranasEmissary extends Card {
  constructor(game) {
    super(game, "Drana's Emissary", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DranasEmissary;
