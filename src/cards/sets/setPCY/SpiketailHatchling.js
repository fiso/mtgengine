"use strict";
const Constants = require ("../../../Constants");
const SpiketailHatchlingBase = require("../set8ED/SpiketailHatchling");

class SpiketailHatchling extends SpiketailHatchlingBase {
  constructor (game) {
    super(game, "Spiketail Hatchling", "Prophecy", "PCY");
  }
}

module.exports = SpiketailHatchling;
