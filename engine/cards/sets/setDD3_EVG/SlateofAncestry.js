"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlateofAncestry extends Card {
  constructor(game) {
    super(game, "Slate of Ancestry", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SlateofAncestry;
