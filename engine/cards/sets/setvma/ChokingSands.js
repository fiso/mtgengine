"use strict";
const Constants = require ("../../../Constants");
const ChokingSandsBase = require("../setMIR/ChokingSands");

class ChokingSands extends ChokingSandsBase {
  constructor(game) {
    super(game, "Choking Sands", "Vintage Masters", "VMA");
  }
}

module.exports = ChokingSands;
