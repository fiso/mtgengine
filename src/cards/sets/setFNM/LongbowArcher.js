"use strict";
const Constants = require ("../../../Constants");
const LongbowArcherBase = require("../setPRM/LongbowArcher");

class LongbowArcher extends LongbowArcherBase {
  constructor (game) {
    super(game, "Longbow Archer", "Friday Night Magic 2000", "FNM");
  }
}

module.exports = LongbowArcher;
