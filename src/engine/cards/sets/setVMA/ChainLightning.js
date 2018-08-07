"use strict";
const Constants = require ("../../../Constants");
const ChainLightningBase = require("../setBBD/ChainLightning");

class ChainLightning extends ChainLightningBase {
  constructor (game) {
    super(game, "Chain Lightning", "Vintage Masters", "VMA");
  }
}

module.exports = ChainLightning;
