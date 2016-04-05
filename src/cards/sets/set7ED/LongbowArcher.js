"use strict";
const Constants = require ("../../../Constants");
const LongbowArcherBase = require("../set6ED/LongbowArcher");

class LongbowArcher extends LongbowArcherBase {
  constructor(game) {
    super(game, "Longbow Archer", "Seventh Edition", "7ED");
  }
}

module.exports = LongbowArcher;
