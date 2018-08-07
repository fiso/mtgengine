"use strict";
const Constants = require ("../../../Constants");
const SuddenStrengthBase = require("../setVMA/SuddenStrength");

class SuddenStrength extends SuddenStrengthBase {
  constructor (game) {
    super(game, "Sudden Strength", "Judgment", "JUD");
  }
}

module.exports = SuddenStrength;
