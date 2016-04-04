"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelofMercy extends Card {
  constructor(game) {
    super(game, "Angel of Mercy", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = AngelofMercy;
