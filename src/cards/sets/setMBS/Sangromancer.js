"use strict";
const Constants = require ("../../../Constants");
const SangromancerBase = require("../setC17/Sangromancer");

class Sangromancer extends SangromancerBase {
  constructor (game) {
    super(game, "Sangromancer", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Sangromancer;
