"use strict";
const Constants = require ("../../../Constants");
const QuietusSpikeBase = require("../setC17/QuietusSpike");

class QuietusSpike extends QuietusSpikeBase {
  constructor (game) {
    super(game, "Quietus Spike", "Planechase 2012", "PC2");
  }
}

module.exports = QuietusSpike;
