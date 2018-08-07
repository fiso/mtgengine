"use strict";
const Constants = require ("../../../Constants");
const ForgottenCaveBase = require("../setC18/ForgottenCave");

class ForgottenCave extends ForgottenCaveBase {
  constructor (game) {
    super(game, "Forgotten Cave", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = ForgottenCave;
