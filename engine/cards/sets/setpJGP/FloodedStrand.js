"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FloodedStrand extends Card {
  constructor(game) {
    super(game, "Flooded Strand", "Judge Gift Program", "pJGP");
  }
}

module.exports = FloodedStrand;
