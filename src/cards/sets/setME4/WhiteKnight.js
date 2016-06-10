"use strict";
const Constants = require ("../../../Constants");
const WhiteKnightBase = require("../setATH/WhiteKnight");

class WhiteKnight extends WhiteKnightBase {
  constructor (game) {
    super(game, "White Knight", "Masters Edition IV", "ME4");
  }
}

module.exports = WhiteKnight;
