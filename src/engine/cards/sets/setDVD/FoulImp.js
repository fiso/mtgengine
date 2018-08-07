"use strict";
const Constants = require ("../../../Constants");
const FoulImpBase = require("../setDDR/FoulImp");

class FoulImp extends FoulImpBase {
  constructor (game) {
    super(game, "Foul Imp", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = FoulImp;
