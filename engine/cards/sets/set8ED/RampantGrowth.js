"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RampantGrowthBase = require("../setBTD/RampantGrowth.js");

class RampantGrowth extends RampantGrowthBase {
  constructor(game) {
    super(game, "Rampant Growth", "Eighth Edition", "8ED");
  }
}

module.exports = RampantGrowth;
