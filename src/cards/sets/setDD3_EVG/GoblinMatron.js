"use strict";
const Constants = require ("../../../Constants");
const GoblinMatronBase = require("../setATH/GoblinMatron");

class GoblinMatron extends GoblinMatronBase {
  constructor(game) {
    super(game, "Goblin Matron", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = GoblinMatron;
