"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrimevalTitanBase = require("../setpGPX/PrimevalTitan.js");

class PrimevalTitan extends PrimevalTitanBase {
  constructor(game) {
    super(game, "Primeval Titan", "Magic 2011", "M11");
  }
}

module.exports = PrimevalTitan;
