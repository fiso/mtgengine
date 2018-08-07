"use strict";
const Constants = require ("../../../Constants");
const LoxodonLineBreakerBase = require("../setMTGA/LoxodonLineBreaker");

class LoxodonLineBreaker extends LoxodonLineBreakerBase {
  constructor (game) {
    super(game, "Loxodon Line Breaker", "Core Set 2019", "M19");
  }
}

module.exports = LoxodonLineBreaker;
