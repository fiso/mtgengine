"use strict";
const Constants = require ("../../../Constants");
const SpiketailHatchlingBase = require("../set10E/SpiketailHatchling");

class SpiketailHatchling extends SpiketailHatchlingBase {
  constructor (game) {
    super(game, "Spiketail Hatchling", "Prophecy", "PCY");
  }
}

module.exports = SpiketailHatchling;
