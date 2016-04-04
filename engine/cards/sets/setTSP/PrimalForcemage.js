"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalForcemage extends Card {
  constructor(game) {
    super(game, "Primal Forcemage", "Time Spiral", "TSP");
  }
}

module.exports = PrimalForcemage;
