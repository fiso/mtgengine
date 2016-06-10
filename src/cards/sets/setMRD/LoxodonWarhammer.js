"use strict";
const Constants = require ("../../../Constants");
const LoxodonWarhammerBase = require("../setC14/LoxodonWarhammer");

class LoxodonWarhammer extends LoxodonWarhammerBase {
  constructor (game) {
    super(game, "Loxodon Warhammer", "Mirrodin", "MRD");
  }
}

module.exports = LoxodonWarhammer;
