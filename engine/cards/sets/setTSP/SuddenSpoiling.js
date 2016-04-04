"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuddenSpoilingBase = require("../setC13/SuddenSpoiling.js");

class SuddenSpoiling extends SuddenSpoilingBase {
  constructor(game) {
    super(game, "Sudden Spoiling", "Time Spiral", "TSP");
  }
}

module.exports = SuddenSpoiling;
