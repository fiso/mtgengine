"use strict";
const Constants = require ("../../../Constants");
const WhirlwindBase = require("../setCMA/Whirlwind");

class Whirlwind extends WhirlwindBase {
  constructor (game) {
    super(game, "Whirlwind", "Commander 2014", "C14");
  }
}

module.exports = Whirlwind;
