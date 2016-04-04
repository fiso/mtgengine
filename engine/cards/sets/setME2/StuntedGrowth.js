"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StuntedGrowthBase = require("../setICE/StuntedGrowth.js");

class StuntedGrowth extends StuntedGrowthBase {
  constructor(game) {
    super(game, "Stunted Growth", "Masters Edition II", "ME2");
  }
}

module.exports = StuntedGrowth;
