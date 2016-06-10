"use strict";
const Constants = require ("../../../Constants");
const LoxodonWarhammerBase = require("../setC14/LoxodonWarhammer");

class LoxodonWarhammer extends LoxodonWarhammerBase {
  constructor (game) {
    super(game, "Loxodon Warhammer", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = LoxodonWarhammer;
