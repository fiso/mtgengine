"use strict";
const Constants = require ("../../../Constants");
const WhiteKnightBase = require("../setDDG/WhiteKnight");

class WhiteKnight extends WhiteKnightBase {
  constructor (game) {
    super(game, "White Knight", "Anthologies", "ATH");
  }
}

module.exports = WhiteKnight;
