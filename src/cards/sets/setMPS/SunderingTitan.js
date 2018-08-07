"use strict";
const Constants = require ("../../../Constants");
const SunderingTitanBase = require("../setA25/SunderingTitan");

class SunderingTitan extends SunderingTitanBase {
  constructor (game) {
    super(game, "Sundering Titan", "Kaladesh Inventions", "MPS");
  }
}

module.exports = SunderingTitan;
