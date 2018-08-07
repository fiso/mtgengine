"use strict";
const Constants = require ("../../../Constants");
const ChokingSandsBase = require("../setVMA/ChokingSands");

class ChokingSands extends ChokingSandsBase {
  constructor (game) {
    super(game, "Choking Sands", "Mirage", "MIR");
  }
}

module.exports = ChokingSands;
