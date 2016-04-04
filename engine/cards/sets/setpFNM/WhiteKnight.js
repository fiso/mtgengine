"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhiteKnightBase = require("../setATH/WhiteKnight.js");

class WhiteKnight extends WhiteKnightBase {
  constructor(game) {
    super(game, "White Knight", "Friday Night Magic", "pFNM");
  }
}

module.exports = WhiteKnight;
