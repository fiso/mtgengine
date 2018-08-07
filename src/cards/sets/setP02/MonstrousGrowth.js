"use strict";
const Constants = require ("../../../Constants");
const MonstrousGrowthBase = require("../set8ED/MonstrousGrowth");

class MonstrousGrowth extends MonstrousGrowthBase {
  constructor (game) {
    super(game, "Monstrous Growth", "Portal Second Age", "P02");
  }
}

module.exports = MonstrousGrowth;
