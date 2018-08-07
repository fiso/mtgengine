"use strict";
const Constants = require ("../../../Constants");
const SuddenSpoilingBase = require("../setC14/SuddenSpoiling");

class SuddenSpoiling extends SuddenSpoilingBase {
  constructor (game) {
    super(game, "Sudden Spoiling", "Commander 2013", "C13");
  }
}

module.exports = SuddenSpoiling;
