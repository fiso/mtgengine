"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FoulImpBase = require("../setDD3_DVD/FoulImp.js");

class FoulImp extends FoulImpBase {
  constructor(game) {
    super(game, "Foul Imp", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = FoulImp;
