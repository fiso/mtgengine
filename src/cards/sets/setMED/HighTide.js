"use strict";
const Constants = require ("../../../Constants");
const HighTideBase = require("../setVMA/HighTide");

class HighTide extends HighTideBase {
  constructor (game) {
    super(game, "High Tide", "Masters Edition", "MED");
  }
}

module.exports = HighTide;
