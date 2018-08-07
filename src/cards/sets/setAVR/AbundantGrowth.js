"use strict";
const Constants = require ("../../../Constants");
const AbundantGrowthBase = require("../setEMA/AbundantGrowth");

class AbundantGrowth extends AbundantGrowthBase {
  constructor (game) {
    super(game, "Abundant Growth", "Avacyn Restored", "AVR");
  }
}

module.exports = AbundantGrowth;
