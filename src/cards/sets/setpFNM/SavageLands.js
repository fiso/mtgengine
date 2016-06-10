"use strict";
const Constants = require ("../../../Constants");
const SavageLandsBase = require("../setC13/SavageLands");

class SavageLands extends SavageLandsBase {
  constructor (game) {
    super(game, "Savage Lands", "Friday Night Magic", "pFNM");
  }
}

module.exports = SavageLands;
