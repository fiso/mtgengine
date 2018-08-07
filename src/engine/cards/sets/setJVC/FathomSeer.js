"use strict";
const Constants = require ("../../../Constants");
const FathomSeerBase = require("../setA25/FathomSeer");

class FathomSeer extends FathomSeerBase {
  constructor (game) {
    super(game, "Fathom Seer", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = FathomSeer;
