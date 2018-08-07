"use strict";
const Constants = require ("../../../Constants");
const SpikeFeederBase = require("../setTPR/SpikeFeeder");

class SpikeFeeder extends SpikeFeederBase {
  constructor (game) {
    super(game, "Spike Feeder", "Magic Online Promos", "PRM");
  }
}

module.exports = SpikeFeeder;
