"use strict";
const Constants = require ("../../../Constants");
const FloodedStrandBase = require("../setPNAT/FloodedStrand");

class FloodedStrand extends FloodedStrandBase {
  constructor (game) {
    super(game, "Flooded Strand", "World Championship Decks 2004", "WC04");
  }
}

module.exports = FloodedStrand;
