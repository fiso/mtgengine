"use strict";
const Constants = require ("../../../Constants");
const WhirlwindBase = require("../setCMA/Whirlwind");

class Whirlwind extends WhirlwindBase {
  constructor (game) {
    super(game, "Whirlwind", "Starter 1999", "S99");
  }
}

module.exports = Whirlwind;
