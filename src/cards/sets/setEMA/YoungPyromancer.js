"use strict";
const Constants = require ("../../../Constants");
const YoungPyromancerBase = require("../setDDS/YoungPyromancer");

class YoungPyromancer extends YoungPyromancerBase {
  constructor (game) {
    super(game, "Young Pyromancer", "Eternal Masters", "EMA");
  }
}

module.exports = YoungPyromancer;
