"use strict";
const Constants = require ("../../../Constants");
const MonstrousGrowthBase = require("../set8ED/MonstrousGrowth");

class MonstrousGrowth extends MonstrousGrowthBase {
  constructor (game) {
    super(game, "Monstrous Growth", "Seventh Edition", "7ED");
  }
}

module.exports = MonstrousGrowth;
