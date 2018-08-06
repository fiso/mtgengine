"use strict";
const Constants = require ("../../../Constants");
const AbundantGrowthBase = require("../setAVR/AbundantGrowth");

class AbundantGrowth extends AbundantGrowthBase {
  constructor (game) {
    super(game, "Abundant Growth", "Eternal Masters", "EMA");
  }
}

module.exports = AbundantGrowth;
