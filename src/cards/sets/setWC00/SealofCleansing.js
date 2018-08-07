"use strict";
const Constants = require ("../../../Constants");
const SealofCleansingBase = require("../setEMA/SealofCleansing");

class SealofCleansing extends SealofCleansingBase {
  constructor (game) {
    super(game, "Seal of Cleansing", "World Championship Decks 2000", "WC00");
  }
}

module.exports = SealofCleansing;
