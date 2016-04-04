"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BreedingPoolBase = require("../setDIS/BreedingPool.js");

class BreedingPool extends BreedingPoolBase {
  constructor(game) {
    super(game, "Breeding Pool", "Gatecrash", "GTC");
  }
}

module.exports = BreedingPool;
