"use strict";
const Constants = require ("../../../Constants");
const GoblinBurrowsBase = require("../setDD3_EVG/GoblinBurrows");

class GoblinBurrows extends GoblinBurrowsBase {
  constructor(game) {
    super(game, "Goblin Burrows", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinBurrows;
