"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VerdantHaven extends Card {
  constructor(game) {
    super(game, "Verdant Haven", "Gatecrash", "GTC");
  }
}

module.exports = VerdantHaven;
