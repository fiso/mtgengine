"use strict";
const Constants = require ("../../../Constants");
const BreedingPoolBase = require("../setDIS/BreedingPool");

class BreedingPool extends BreedingPoolBase {
  constructor (game) {
    super(game, "Breeding Pool", "Gatecrash", "GTC");
  }
}

module.exports = BreedingPool;
