"use strict";
const Constants = require ("../../../Constants");
const SacredGroundBase = require("../set8ED/SacredGround");

class SacredGround extends SacredGroundBase {
  constructor (game) {
    super(game, "Sacred Ground", "Seventh Edition", "7ED");
  }
}

module.exports = SacredGround;
