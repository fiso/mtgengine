"use strict";
const Constants = require ("../../../Constants");
const SummerBloomBase = require("../set9ED/SummerBloom");

class SummerBloom extends SummerBloomBase {
  constructor (game) {
    super(game, "Summer Bloom", "Starter 1999", "S99");
  }
}

module.exports = SummerBloom;
