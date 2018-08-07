"use strict";
const Constants = require ("../../../Constants");
const SpikeHatcherBase = require("../setTPR/SpikeHatcher");

class SpikeHatcher extends SpikeHatcherBase {
  constructor (game) {
    super(game, "Spike Hatcher", "Exodus", "EXO");
  }
}

module.exports = SpikeHatcher;
