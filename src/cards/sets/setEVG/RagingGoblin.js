"use strict";
const Constants = require ("../../../Constants");
const RagingGoblinBase = require("../setMTGA/RagingGoblin");

class RagingGoblin extends RagingGoblinBase {
  constructor (game) {
    super(game, "Raging Goblin", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = RagingGoblin;
