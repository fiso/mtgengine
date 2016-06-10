"use strict";
const Constants = require ("../../../Constants");
const WhiteKnightBase = require("../setATH/WhiteKnight");

class WhiteKnight extends WhiteKnightBase {
  constructor (game) {
    super(game, "White Knight", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = WhiteKnight;
