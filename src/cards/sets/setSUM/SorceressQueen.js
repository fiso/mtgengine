"use strict";
const Constants = require ("../../../Constants");
const SorceressQueenBase = require("../set5ED/SorceressQueen");

class SorceressQueen extends SorceressQueenBase {
  constructor (game) {
    super(game, "Sorceress Queen", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = SorceressQueen;
