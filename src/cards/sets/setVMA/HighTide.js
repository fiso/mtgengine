"use strict";
const Constants = require ("../../../Constants");
const HighTideBase = require("../setFEM/HighTide");

class HighTide extends HighTideBase {
  constructor(game) {
    super(game, "High Tide", "Vintage Masters", "VMA");
  }
}

module.exports = HighTide;
