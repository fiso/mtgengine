"use strict";
const Constants = require ("../../../Constants");
const FertileGroundBase = require("../setBRB/FertileGround");

class FertileGround extends FertileGroundBase {
  constructor (game) {
    super(game, "Fertile Ground", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = FertileGround;
