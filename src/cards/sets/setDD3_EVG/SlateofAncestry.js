"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlateofAncestry extends UnimplementedCard {
  constructor (game) {
    super(game, "Slate of Ancestry", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SlateofAncestry;
