"use strict";
const Constants = require ("../../../Constants");
const CinderPyromancerBase = require("../setDPA/CinderPyromancer");

class CinderPyromancer extends CinderPyromancerBase {
  constructor(game) {
    super(game, "Cinder Pyromancer", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = CinderPyromancer;
