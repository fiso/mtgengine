"use strict";
const Constants = require ("../../../Constants");
const PrimevalTitanBase = require("../setpGPX/PrimevalTitan");

class PrimevalTitan extends PrimevalTitanBase {
  constructor (game) {
    super(game, "Primeval Titan", "Magic 2012", "M12");
  }
}

module.exports = PrimevalTitan;
