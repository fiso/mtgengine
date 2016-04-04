"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighPriestofPenance extends Card {
  constructor(game) {
    super(game, "High Priest of Penance", "Gatecrash", "GTC");
  }
}

module.exports = HighPriestofPenance;
