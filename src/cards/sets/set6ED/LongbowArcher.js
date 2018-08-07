"use strict";
const Constants = require ("../../../Constants");
const LongbowArcherBase = require("../setPRM/LongbowArcher");

class LongbowArcher extends LongbowArcherBase {
  constructor (game) {
    super(game, "Longbow Archer", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LongbowArcher;
