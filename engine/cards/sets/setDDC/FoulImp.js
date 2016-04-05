"use strict";
const Constants = require ("../../../Constants");
const FoulImpBase = require("../setDD3_DVD/FoulImp");

class FoulImp extends FoulImpBase {
  constructor(game) {
    super(game, "Foul Imp", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = FoulImp;
