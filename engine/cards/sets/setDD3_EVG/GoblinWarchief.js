"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinWarchief extends Card {
  constructor(game) {
    super(game, "Goblin Warchief", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = GoblinWarchief;
