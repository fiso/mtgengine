"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiketailHatchlingBase = require("../set8ED/SpiketailHatchling.js");

class SpiketailHatchling extends SpiketailHatchlingBase {
  constructor(game) {
    super(game, "Spiketail Hatchling", "Prophecy", "PCY");
  }
}

module.exports = SpiketailHatchling;
