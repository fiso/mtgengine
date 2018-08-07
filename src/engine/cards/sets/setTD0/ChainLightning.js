"use strict";
const Constants = require ("../../../Constants");
const ChainLightningBase = require("../setBBD/ChainLightning");

class ChainLightning extends ChainLightningBase {
  constructor (game) {
    super(game, "Chain Lightning", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = ChainLightning;
