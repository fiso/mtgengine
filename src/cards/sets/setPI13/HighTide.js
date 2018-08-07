"use strict";
const Constants = require ("../../../Constants");
const HighTideBase = require("../setVMA/HighTide");

class HighTide extends HighTideBase {
  constructor (game) {
    super(game, "High Tide", "IDW Comics 2013", "PI13");
  }
}

module.exports = HighTide;
