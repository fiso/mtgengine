"use strict";
const Constants = require ("../../../Constants");
const SealofCleansingBase = require("../setEMA/SealofCleansing");

class SealofCleansing extends SealofCleansingBase {
  constructor (game) {
    super(game, "Seal of Cleansing", "Vintage Masters", "VMA");
  }
}

module.exports = SealofCleansing;
