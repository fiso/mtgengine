"use strict";
const Constants = require ("../../../Constants");
const QuietusSpikeBase = require("../setC17/QuietusSpike");

class QuietusSpike extends QuietusSpikeBase {
  constructor (game) {
    super(game, "Quietus Spike", "Shards of Alara", "ALA");
  }
}

module.exports = QuietusSpike;
