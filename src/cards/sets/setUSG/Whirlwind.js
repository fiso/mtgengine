"use strict";
const Constants = require ("../../../Constants");
const WhirlwindBase = require("../setCMA/Whirlwind");

class Whirlwind extends WhirlwindBase {
  constructor (game) {
    super(game, "Whirlwind", "Urza's Saga", "USG");
  }
}

module.exports = Whirlwind;
