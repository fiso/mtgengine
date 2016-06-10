"use strict";
const Constants = require ("../../../Constants");
const SorceressQueenBase = require("../setARN/SorceressQueen");

class SorceressQueen extends SorceressQueenBase {
  constructor (game) {
    super(game, "Sorceress Queen", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = SorceressQueen;
