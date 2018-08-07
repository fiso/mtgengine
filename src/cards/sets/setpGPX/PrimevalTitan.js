"use strict";
const Constants = require ("../../../Constants");
const PrimevalTitanBase = require("../setIMA/PrimevalTitan");

class PrimevalTitan extends PrimevalTitanBase {
  constructor (game) {
    super(game, "Primeval Titan", "Grand Prix Promos", "PGPX");
  }
}

module.exports = PrimevalTitan;
