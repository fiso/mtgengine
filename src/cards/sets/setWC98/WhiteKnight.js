"use strict";
const Constants = require ("../../../Constants");
const WhiteKnightBase = require("../setDDG/WhiteKnight");

class WhiteKnight extends WhiteKnightBase {
  constructor (game) {
    super(game, "White Knight", "World Championship Decks 1998", "WC98");
  }
}

module.exports = WhiteKnight;
