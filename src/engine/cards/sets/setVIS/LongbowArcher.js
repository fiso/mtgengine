"use strict";
const Constants = require ("../../../Constants");
const LongbowArcherBase = require("../setPRM/LongbowArcher");

class LongbowArcher extends LongbowArcherBase {
  constructor (game) {
    super(game, "Longbow Archer", "Visions", "VIS");
  }
}

module.exports = LongbowArcher;
