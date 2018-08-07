"use strict";
const Constants = require ("../../../Constants");
const FloodedStrandBase = require("../setPNAT/FloodedStrand");

class FloodedStrand extends FloodedStrandBase {
  constructor (game) {
    super(game, "Flooded Strand", "Khans of Tarkir", "KTK");
  }
}

module.exports = FloodedStrand;
