"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SacredFoundry extends Card {
  constructor(game) {
    super(game, "Sacred Foundry", "Gatecrash", "GTC");
  }
}

module.exports = SacredFoundry;
