"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SummerBloomBase = require("../set6ED/SummerBloom.js");

class SummerBloom extends SummerBloomBase {
  constructor(game) {
    super(game, "Summer Bloom", "Starter 1999", "S99");
  }
}

module.exports = SummerBloom;
