"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalBoost extends Card {
  constructor(game) {
    super(game, "Primal Boost", "Onslaught", "ONS");
  }
}

module.exports = PrimalBoost;
