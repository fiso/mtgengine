"use strict";
const Constants = require ("../../../Constants");
const CinderPyromancerBase = require("../setDPA/CinderPyromancer");

class CinderPyromancer extends CinderPyromancerBase {
  constructor(game) {
    super(game, "Cinder Pyromancer", "Eventide", "EVE");
  }
}

module.exports = CinderPyromancer;
