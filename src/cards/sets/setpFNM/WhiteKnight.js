"use strict";
const Constants = require ("../../../Constants");
const WhiteKnightBase = require("../setATH/WhiteKnight");

class WhiteKnight extends WhiteKnightBase {
  constructor (game) {
    super(game, "White Knight", "Friday Night Magic", "pFNM");
  }
}

module.exports = WhiteKnight;
