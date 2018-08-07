"use strict";
const Constants = require ("../../../Constants");
const LoxodonWarhammerBase = require("../setCM2/LoxodonWarhammer");

class LoxodonWarhammer extends LoxodonWarhammerBase {
  constructor (game) {
    super(game, "Loxodon Warhammer", "Mirrodin", "MRD");
  }
}

module.exports = LoxodonWarhammer;
