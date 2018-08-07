"use strict";
const Constants = require ("../../../Constants");
const MonstrousGrowthBase = require("../set8ED/MonstrousGrowth");

class MonstrousGrowth extends MonstrousGrowthBase {
  constructor (game) {
    super(game, "Monstrous Growth", "Starter 1999", "S99");
  }
}

module.exports = MonstrousGrowth;
