"use strict";
const Constants = require ("../../../Constants");
const ForgottenCaveBase = require("../setC18/ForgottenCave");

class ForgottenCave extends ForgottenCaveBase {
  constructor (game) {
    super(game, "Forgotten Cave", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ForgottenCave;
