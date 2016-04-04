"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GempalmIncinerator extends Card {
  constructor(game) {
    super(game, "Gempalm Incinerator", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = GempalmIncinerator;
