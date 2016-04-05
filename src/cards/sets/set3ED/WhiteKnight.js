"use strict";
const Constants = require ("../../../Constants");
const WhiteKnightBase = require("../setATH/WhiteKnight");

class WhiteKnight extends WhiteKnightBase {
  constructor(game) {
    super(game, "White Knight", "Revised Edition", "3ED");
  }
}

module.exports = WhiteKnight;
