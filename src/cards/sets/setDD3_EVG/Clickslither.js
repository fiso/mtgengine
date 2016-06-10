"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Clickslither extends UnimplementedCard {
  constructor (game) {
    super(game, "Clickslither", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Clickslither;
