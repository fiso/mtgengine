"use strict";
const Constants = require ("../../../Constants");
const SealofCleansingBase = require("../setEMA/SealofCleansing");

class SealofCleansing extends SealofCleansingBase {
  constructor (game) {
    super(game, "Seal of Cleansing", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = SealofCleansing;
