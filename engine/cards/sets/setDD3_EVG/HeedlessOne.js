"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeedlessOne extends Card {
  constructor(game) {
    super(game, "Heedless One", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = HeedlessOne;
