"use strict";
const Constants = require ("../../../Constants");
const HighTideBase = require("../setFEM/HighTide");

class HighTide extends HighTideBase {
  constructor (game) {
    super(game, "High Tide", "Media Inserts", "pMEI");
  }
}

module.exports = HighTide;
