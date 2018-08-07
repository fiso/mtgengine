"use strict";
const Constants = require ("../../../Constants");
const HarmonizeBase = require("../setC17/Harmonize");

class Harmonize extends HarmonizeBase {
  constructor (game) {
    super(game, "Harmonize", "Archenemy", "ARC");
  }
}

module.exports = Harmonize;
