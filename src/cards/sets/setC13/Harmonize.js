"use strict";
const Constants = require ("../../../Constants");
const HarmonizeBase = require("../setARC/Harmonize");

class Harmonize extends HarmonizeBase {
  constructor (game) {
    super(game, "Harmonize", "Commander 2013 Edition", "C13");
  }
}

module.exports = Harmonize;
