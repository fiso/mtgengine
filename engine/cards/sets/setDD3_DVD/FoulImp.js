"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoulImp extends Card {
  constructor(game) {
    super(game, "Foul Imp", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = FoulImp;
