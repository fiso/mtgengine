"use strict";
const Constants = require ("../../../Constants");
const FertileGroundBase = require("../setC18/FertileGround");

class FertileGround extends FertileGroundBase {
  constructor (game) {
    super(game, "Fertile Ground", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = FertileGround;
