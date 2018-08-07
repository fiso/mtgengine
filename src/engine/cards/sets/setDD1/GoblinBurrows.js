"use strict";
const Constants = require ("../../../Constants");
const GoblinBurrowsBase = require("../setEVG/GoblinBurrows");

class GoblinBurrows extends GoblinBurrowsBase {
  constructor (game) {
    super(game, "Goblin Burrows", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = GoblinBurrows;
