"use strict";
const Constants = require ("../../../Constants");
const BreedingPoolBase = require("../setEXP/BreedingPool");

class BreedingPool extends BreedingPoolBase {
  constructor (game) {
    super(game, "Breeding Pool", "Dissension", "DIS");
  }
}

module.exports = BreedingPool;
