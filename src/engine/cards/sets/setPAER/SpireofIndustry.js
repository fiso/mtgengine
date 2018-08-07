"use strict";
const Constants = require ("../../../Constants");
const SpireofIndustryBase = require("../setAER/SpireofIndustry");

class SpireofIndustry extends SpireofIndustryBase {
  constructor (game) {
    super(game, "Spire of Industry", "Aether Revolt Promos", "PAER");
  }
}

module.exports = SpireofIndustry;
