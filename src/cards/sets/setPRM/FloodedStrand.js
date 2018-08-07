"use strict";
const Constants = require ("../../../Constants");
const FloodedStrandBase = require("../setPNAT/FloodedStrand");

class FloodedStrand extends FloodedStrandBase {
  constructor (game) {
    super(game, "Flooded Strand", "Magic Online Promos", "PRM");
  }
}

module.exports = FloodedStrand;
