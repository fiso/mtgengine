"use strict";
const Constants = require ("../../../Constants");
const YoungPyromancerBase = require("../setDDS/YoungPyromancer");

class YoungPyromancer extends YoungPyromancerBase {
  constructor (game) {
    super(game, "Young Pyromancer", "Magic 2014", "M14");
  }
}

module.exports = YoungPyromancer;
