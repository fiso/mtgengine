"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GempalmStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Gempalm Strider", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = GempalmStrider;
