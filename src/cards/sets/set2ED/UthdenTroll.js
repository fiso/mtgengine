"use strict";
const Constants = require ("../../../Constants");
const UthdenTrollBase = require("../setATH/UthdenTroll");

class UthdenTroll extends UthdenTrollBase {
  constructor (game) {
    super(game, "Uthden Troll", "Unlimited Edition", "2ED");
  }
}

module.exports = UthdenTroll;
