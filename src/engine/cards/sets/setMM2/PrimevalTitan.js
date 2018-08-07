"use strict";
const Constants = require ("../../../Constants");
const PrimevalTitanBase = require("../setIMA/PrimevalTitan");

class PrimevalTitan extends PrimevalTitanBase {
  constructor (game) {
    super(game, "Primeval Titan", "Modern Masters 2015", "MM2");
  }
}

module.exports = PrimevalTitan;
