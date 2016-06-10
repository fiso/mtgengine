"use strict";
const Constants = require ("../../../Constants");
const GoblinMatronBase = require("../setATH/GoblinMatron");

class GoblinMatron extends GoblinMatronBase {
  constructor (game) {
    super(game, "Goblin Matron", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinMatron;
