"use strict";
const Constants = require ("../../../Constants");
const UthdenTrollBase = require("../setATH/UthdenTroll");

class UthdenTroll extends UthdenTrollBase {
  constructor (game) {
    super(game, "Uthden Troll", "Limited Edition Beta", "LEB");
  }
}

module.exports = UthdenTroll;
