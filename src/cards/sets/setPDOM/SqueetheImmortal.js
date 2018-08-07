"use strict";
const Constants = require ("../../../Constants");
const SqueetheImmortalBase = require("../setDOM/SqueetheImmortal");

class SqueetheImmortal extends SqueetheImmortalBase {
  constructor (game) {
    super(game, "Squee, the Immortal", "Dominaria Promos", "PDOM");
  }
}

module.exports = SqueetheImmortal;
