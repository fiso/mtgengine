"use strict";
const Constants = require ("../../../Constants");
const SpikeColonyBase = require("../setBRB/SpikeColony");

class SpikeColony extends SpikeColonyBase {
  constructor (game) {
    super(game, "Spike Colony", "Tempest Remastered", "TPR");
  }
}

module.exports = SpikeColony;
