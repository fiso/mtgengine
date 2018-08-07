"use strict";
const Constants = require ("../../../Constants");
const PrimevalTitanBase = require("../setIMA/PrimevalTitan");

class PrimevalTitan extends PrimevalTitanBase {
  constructor (game) {
    super(game, "Primeval Titan", "Magic 2011", "M11");
  }
}

module.exports = PrimevalTitan;
