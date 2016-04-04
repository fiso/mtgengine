"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeedlessOne extends UnimplementedCard {
  constructor(game) {
    super(game, "Heedless One", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = HeedlessOne;
