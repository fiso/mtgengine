"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DuskImp extends Card {
  constructor(game) {
    super(game, "Dusk Imp", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = DuskImp;
