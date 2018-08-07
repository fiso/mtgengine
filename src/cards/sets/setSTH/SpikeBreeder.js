"use strict";
const Constants = require ("../../../Constants");
const SpikeBreederBase = require("../setTPR/SpikeBreeder");

class SpikeBreeder extends SpikeBreederBase {
  constructor (game) {
    super(game, "Spike Breeder", "Stronghold", "STH");
  }
}

module.exports = SpikeBreeder;
