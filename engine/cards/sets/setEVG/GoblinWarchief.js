"use strict";
const Constants = require ("../../../Constants");
const GoblinWarchiefBase = require("../setDD3_EVG/GoblinWarchief");

class GoblinWarchief extends GoblinWarchiefBase {
  constructor(game) {
    super(game, "Goblin Warchief", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinWarchief;
