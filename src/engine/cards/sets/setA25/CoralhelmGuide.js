"use strict";
const Constants = require ("../../../Constants");
const CoralhelmGuideBase = require("../setBBD/CoralhelmGuide");

class CoralhelmGuide extends CoralhelmGuideBase {
  constructor (game) {
    super(game, "Coralhelm Guide", "Masters 25", "A25");
  }
}

module.exports = CoralhelmGuide;
