"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinBurrowsBase = require("../setDD3_EVG/GoblinBurrows.js");

class GoblinBurrows extends GoblinBurrowsBase {
  constructor(game) {
    super(game, "Goblin Burrows", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinBurrows;
