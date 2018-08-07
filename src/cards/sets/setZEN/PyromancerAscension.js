"use strict";
const Constants = require ("../../../Constants");
const PyromancerAscensionBase = require("../setMM3/PyromancerAscension");

class PyromancerAscension extends PyromancerAscensionBase {
  constructor (game) {
    super(game, "Pyromancer Ascension", "Zendikar", "ZEN");
  }
}

module.exports = PyromancerAscension;
