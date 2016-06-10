"use strict";
const Constants = require ("../../../Constants");
const HarmonizeBase = require("../setARC/Harmonize");

class Harmonize extends HarmonizeBase {
  constructor (game) {
    super(game, "Harmonize", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Harmonize;
