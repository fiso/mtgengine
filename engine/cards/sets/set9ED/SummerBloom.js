"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SummerBloomBase = require("../set6ED/SummerBloom.js");

class SummerBloom extends SummerBloomBase {
  constructor(game) {
    super(game, "Summer Bloom", "Ninth Edition", "9ED");
  }
}

module.exports = SummerBloom;
