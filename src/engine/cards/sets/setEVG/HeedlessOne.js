"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeedlessOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Heedless One", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = HeedlessOne;
