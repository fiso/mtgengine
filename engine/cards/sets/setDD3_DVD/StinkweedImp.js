"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StinkweedImp extends Card {
  constructor(game) {
    super(game, "Stinkweed Imp", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = StinkweedImp;
