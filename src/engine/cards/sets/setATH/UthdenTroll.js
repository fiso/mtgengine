"use strict";
const Constants = require ("../../../Constants");
const UthdenTrollBase = require("../setTSB/UthdenTroll");

class UthdenTroll extends UthdenTrollBase {
  constructor (game) {
    super(game, "Uthden Troll", "Anthologies", "ATH");
  }
}

module.exports = UthdenTroll;
