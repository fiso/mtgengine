"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloodedStrand extends UnimplementedCard {
  constructor (game) {
    super(game, "Flooded Strand", "Judge Gift Program", "pJGP");
  }
}

module.exports = FloodedStrand;
