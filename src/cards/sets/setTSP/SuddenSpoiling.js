"use strict";
const Constants = require ("../../../Constants");
const SuddenSpoilingBase = require("../setC13/SuddenSpoiling");

class SuddenSpoiling extends SuddenSpoilingBase {
  constructor(game) {
    super(game, "Sudden Spoiling", "Time Spiral", "TSP");
  }
}

module.exports = SuddenSpoiling;
