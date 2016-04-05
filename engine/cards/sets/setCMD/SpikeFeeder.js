"use strict";
const Constants = require ("../../../Constants");
const SpikeFeederBase = require("../setBRB/SpikeFeeder");

class SpikeFeeder extends SpikeFeederBase {
  constructor(game) {
    super(game, "Spike Feeder", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SpikeFeeder;
