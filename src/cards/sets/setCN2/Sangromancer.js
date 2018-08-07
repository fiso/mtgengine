"use strict";
const Constants = require ("../../../Constants");
const SangromancerBase = require("../setC17/Sangromancer");

class Sangromancer extends SangromancerBase {
  constructor (game) {
    super(game, "Sangromancer", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Sangromancer;
