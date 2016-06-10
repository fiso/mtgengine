"use strict";
const Constants = require ("../../../Constants");
const SuddenSpoilingBase = require("../setC13/SuddenSpoiling");

class SuddenSpoiling extends SuddenSpoilingBase {
  constructor (game) {
    super(game, "Sudden Spoiling", "Commander 2014", "C14");
  }
}

module.exports = SuddenSpoiling;
