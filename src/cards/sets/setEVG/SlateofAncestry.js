"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlateofAncestry extends UnimplementedCard {
  constructor (game) {
    super(game, "Slate of Ancestry", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = SlateofAncestry;
