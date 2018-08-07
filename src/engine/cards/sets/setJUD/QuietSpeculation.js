"use strict";
const Constants = require ("../../../Constants");
const QuietSpeculationBase = require("../setEMA/QuietSpeculation");

class QuietSpeculation extends QuietSpeculationBase {
  constructor (game) {
    super(game, "Quiet Speculation", "Judgment", "JUD");
  }
}

module.exports = QuietSpeculation;
