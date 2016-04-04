"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnexpectedResults extends Card {
  constructor(game) {
    super(game, "Unexpected Results", "Gatecrash", "GTC");
  }
}

module.exports = UnexpectedResults;
