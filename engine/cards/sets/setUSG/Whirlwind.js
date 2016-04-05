"use strict";
const Constants = require ("../../../Constants");
const WhirlwindBase = require("../setC14/Whirlwind");

class Whirlwind extends WhirlwindBase {
  constructor(game) {
    super(game, "Whirlwind", "Urza's Saga", "USG");
  }
}

module.exports = Whirlwind;
