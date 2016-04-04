"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChainLightningBase = require("../setLEG/ChainLightning.js");

class ChainLightning extends ChainLightningBase {
  constructor(game) {
    super(game, "Chain Lightning", "Vintage Masters", "VMA");
  }
}

module.exports = ChainLightning;
