"use strict";
const Constants = require ("../../../Constants");
const FloodedStrandBase = require("../setpJGP/FloodedStrand");

class FloodedStrand extends FloodedStrandBase {
  constructor (game) {
    super(game, "Flooded Strand", "Onslaught", "ONS");
  }
}

module.exports = FloodedStrand;
