"use strict";
const Constants = require ("../../../Constants");
const UthdenTrollBase = require("../setTSB/UthdenTroll");

class UthdenTroll extends UthdenTrollBase {
  constructor (game) {
    super(game, "Uthden Troll", "Battle Royale Box Set", "BRB");
  }
}

module.exports = UthdenTroll;
