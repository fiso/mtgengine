"use strict";
const Constants = require ("../../../Constants");
const LoxodonWarhammerBase = require("../setCM2/LoxodonWarhammer");

class LoxodonWarhammer extends LoxodonWarhammerBase {
  constructor (game) {
    super(game, "Loxodon Warhammer", "Commander 2014", "C14");
  }
}

module.exports = LoxodonWarhammer;
