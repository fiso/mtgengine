"use strict";
const Constants = require ("../../../Constants");
const TemporalMasteryBase = require("../setMM3/TemporalMastery");

class TemporalMastery extends TemporalMasteryBase {
  constructor (game) {
    super(game, "Temporal Mastery", "Avacyn Restored", "AVR");
  }
}

module.exports = TemporalMastery;
