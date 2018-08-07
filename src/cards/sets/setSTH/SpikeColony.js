"use strict";
const Constants = require ("../../../Constants");
const SpikeColonyBase = require("../setTPR/SpikeColony");

class SpikeColony extends SpikeColonyBase {
  constructor (game) {
    super(game, "Spike Colony", "Stronghold", "STH");
  }
}

module.exports = SpikeColony;
