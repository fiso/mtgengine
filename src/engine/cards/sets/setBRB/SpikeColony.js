"use strict";
const Constants = require ("../../../Constants");
const SpikeColonyBase = require("../setTPR/SpikeColony");

class SpikeColony extends SpikeColonyBase {
  constructor (game) {
    super(game, "Spike Colony", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SpikeColony;
