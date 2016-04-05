"use strict";
const Constants = require ("../../../Constants");
const FathomSeerBase = require("../setC14/FathomSeer");

class FathomSeer extends FathomSeerBase {
  constructor(game) {
    super(game, "Fathom Seer", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = FathomSeer;
