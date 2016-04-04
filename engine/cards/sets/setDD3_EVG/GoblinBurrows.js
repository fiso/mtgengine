"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinBurrows extends Card {
  constructor(game) {
    super(game, "Goblin Burrows", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = GoblinBurrows;
