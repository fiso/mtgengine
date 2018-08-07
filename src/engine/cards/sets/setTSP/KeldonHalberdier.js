"use strict";
const Constants = require ("../../../Constants");
const KeldonHalberdierBase = require("../setIMA/KeldonHalberdier");

class KeldonHalberdier extends KeldonHalberdierBase {
  constructor (game) {
    super(game, "Keldon Halberdier", "Time Spiral", "TSP");
  }
}

module.exports = KeldonHalberdier;
