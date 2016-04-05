"use strict";
const Constants = require ("../../../Constants");
const SuddenStrengthBase = require("../setJUD/SuddenStrength");

class SuddenStrength extends SuddenStrengthBase {
  constructor(game) {
    super(game, "Sudden Strength", "Vintage Masters", "VMA");
  }
}

module.exports = SuddenStrength;
