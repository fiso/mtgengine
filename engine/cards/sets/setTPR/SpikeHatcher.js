"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpikeHatcherBase = require("../setEXO/SpikeHatcher.js");

class SpikeHatcher extends SpikeHatcherBase {
  constructor(game) {
    super(game, "Spike Hatcher", "Tempest Remastered", "TPR");
  }
}

module.exports = SpikeHatcher;
