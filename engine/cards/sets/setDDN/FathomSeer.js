"use strict";
const Constants = require ("../../../Constants");
const FathomSeerBase = require("../setC14/FathomSeer");

class FathomSeer extends FathomSeerBase {
  constructor(game) {
    super(game, "Fathom Seer", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = FathomSeer;
