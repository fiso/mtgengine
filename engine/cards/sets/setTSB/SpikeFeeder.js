"use strict";
const Constants = require ("../../../Constants");
const SpikeFeederBase = require("../setBRB/SpikeFeeder");

class SpikeFeeder extends SpikeFeederBase {
  constructor(game) {
    super(game, "Spike Feeder", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SpikeFeeder;
