"use strict";
const Constants = require ("../../../Constants");
const SavageLandsBase = require("../setC18/SavageLands");

class SavageLands extends SavageLandsBase {
  constructor (game) {
    super(game, "Savage Lands", "Commander 2016", "C16");
  }
}

module.exports = SavageLands;
