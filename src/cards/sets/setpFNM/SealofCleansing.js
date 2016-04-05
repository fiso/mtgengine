"use strict";
const Constants = require ("../../../Constants");
const SealofCleansingBase = require("../setC15/SealofCleansing");

class SealofCleansing extends SealofCleansingBase {
  constructor(game) {
    super(game, "Seal of Cleansing", "Friday Night Magic", "pFNM");
  }
}

module.exports = SealofCleansing;
