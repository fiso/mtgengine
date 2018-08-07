"use strict";
const Constants = require ("../../../Constants");
const ImpeccableTimingBase = require("../setAKH/ImpeccableTiming");

class ImpeccableTiming extends ImpeccableTimingBase {
  constructor (game) {
    super(game, "Impeccable Timing", "Kaladesh", "KLD");
  }
}

module.exports = ImpeccableTiming;
