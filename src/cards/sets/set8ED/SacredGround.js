"use strict";
const Constants = require ("../../../Constants");
const SacredGroundBase = require("../set9ED/SacredGround");

class SacredGround extends SacredGroundBase {
  constructor (game) {
    super(game, "Sacred Ground", "Eighth Edition", "8ED");
  }
}

module.exports = SacredGround;
