"use strict";
const Constants = require ("../../../Constants");
const SummerBloomBase = require("../set6ED/SummerBloom");

class SummerBloom extends SummerBloomBase {
  constructor(game) {
    super(game, "Summer Bloom", "Ninth Edition", "9ED");
  }
}

module.exports = SummerBloom;
