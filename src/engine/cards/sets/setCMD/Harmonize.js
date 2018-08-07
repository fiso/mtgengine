"use strict";
const Constants = require ("../../../Constants");
const HarmonizeBase = require("../setC17/Harmonize");

class Harmonize extends HarmonizeBase {
  constructor (game) {
    super(game, "Harmonize", "Commander 2011", "CMD");
  }
}

module.exports = Harmonize;
