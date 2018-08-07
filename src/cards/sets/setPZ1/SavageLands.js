"use strict";
const Constants = require ("../../../Constants");
const SavageLandsBase = require("../setC18/SavageLands");

class SavageLands extends SavageLandsBase {
  constructor (game) {
    super(game, "Savage Lands", "Legendary Cube", "PZ1");
  }
}

module.exports = SavageLands;
