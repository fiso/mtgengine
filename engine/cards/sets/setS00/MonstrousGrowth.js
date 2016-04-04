"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MonstrousGrowthBase = require("../set8ED/MonstrousGrowth.js");

class MonstrousGrowth extends MonstrousGrowthBase {
  constructor(game) {
    super(game, "Monstrous Growth", "Starter 2000", "S00");
  }
}

module.exports = MonstrousGrowth;
