"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSledder extends Card {
  constructor(game) {
    super(game, "Goblin Sledder", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = GoblinSledder;
