"use strict";
const Constants = require ("../../../Constants");
const HarmonizeBase = require("../setC17/Harmonize");

class Harmonize extends HarmonizeBase {
  constructor (game) {
    super(game, "Harmonize", "Commander 2013", "C13");
  }
}

module.exports = Harmonize;
