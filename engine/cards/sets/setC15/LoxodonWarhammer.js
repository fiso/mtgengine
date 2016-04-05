"use strict";
const Constants = require ("../../../Constants");
const LoxodonWarhammerBase = require("../setC14/LoxodonWarhammer");

class LoxodonWarhammer extends LoxodonWarhammerBase {
  constructor(game) {
    super(game, "Loxodon Warhammer", "Commander 2015", "C15");
  }
}

module.exports = LoxodonWarhammer;
