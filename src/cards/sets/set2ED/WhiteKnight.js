"use strict";
const Constants = require ("../../../Constants");
const WhiteKnightBase = require("../setATH/WhiteKnight");

class WhiteKnight extends WhiteKnightBase {
  constructor (game) {
    super(game, "White Knight", "Unlimited Edition", "2ED");
  }
}

module.exports = WhiteKnight;
