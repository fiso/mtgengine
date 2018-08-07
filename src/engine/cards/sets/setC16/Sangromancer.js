"use strict";
const Constants = require ("../../../Constants");
const SangromancerBase = require("../setC17/Sangromancer");

class Sangromancer extends SangromancerBase {
  constructor (game) {
    super(game, "Sangromancer", "Commander 2016", "C16");
  }
}

module.exports = Sangromancer;
