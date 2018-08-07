"use strict";
const Constants = require ("../../../Constants");
const GoblinWarchiefBase = require("../setDOM/GoblinWarchief");

class GoblinWarchief extends GoblinWarchiefBase {
  constructor (game) {
    super(game, "Goblin Warchief", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinWarchief;
