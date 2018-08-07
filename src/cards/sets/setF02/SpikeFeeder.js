"use strict";
const Constants = require ("../../../Constants");
const SpikeFeederBase = require("../setTPR/SpikeFeeder");

class SpikeFeeder extends SpikeFeederBase {
  constructor (game) {
    super(game, "Spike Feeder", "Friday Night Magic 2002", "F02");
  }
}

module.exports = SpikeFeeder;
