"use strict";
const Constants = require ("../../../Constants");
const SpikeHatcherBase = require("../setEXO/SpikeHatcher");

class SpikeHatcher extends SpikeHatcherBase {
  constructor (game) {
    super(game, "Spike Hatcher", "Tempest Remastered", "TPR");
  }
}

module.exports = SpikeHatcher;
