"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoilingOracle extends Card {
  constructor(game) {
    super(game, "Coiling Oracle", "Arena League", "pARL");
  }
}

module.exports = CoilingOracle;
