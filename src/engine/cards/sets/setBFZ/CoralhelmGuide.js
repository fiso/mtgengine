"use strict";
const Constants = require ("../../../Constants");
const CoralhelmGuideBase = require("../setBBD/CoralhelmGuide");

class CoralhelmGuide extends CoralhelmGuideBase {
  constructor (game) {
    super(game, "Coralhelm Guide", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CoralhelmGuide;
