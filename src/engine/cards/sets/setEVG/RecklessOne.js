"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless One", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = RecklessOne;
