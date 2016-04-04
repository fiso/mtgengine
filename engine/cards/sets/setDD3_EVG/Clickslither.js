"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Clickslither extends Card {
  constructor(game) {
    super(game, "Clickslither", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Clickslither;
