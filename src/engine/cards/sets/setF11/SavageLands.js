"use strict";
const Constants = require ("../../../Constants");
const SavageLandsBase = require("../setC18/SavageLands");

class SavageLands extends SavageLandsBase {
  constructor (game) {
    super(game, "Savage Lands", "Friday Night Magic 2011", "F11");
  }
}

module.exports = SavageLands;
