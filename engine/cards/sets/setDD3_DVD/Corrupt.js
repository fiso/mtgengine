"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Corrupt extends Card {
  constructor(game) {
    super(game, "Corrupt", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = Corrupt;
