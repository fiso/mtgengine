"use strict";
const Constants = require ("../../../Constants");
const SummerBloomBase = require("../set9ED/SummerBloom");

class SummerBloom extends SummerBloomBase {
  constructor (game) {
    super(game, "Summer Bloom", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SummerBloom;
