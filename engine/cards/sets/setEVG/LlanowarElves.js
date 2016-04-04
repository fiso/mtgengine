"use strict";
const Constants = require ("../../../Constants");
const LlanowarElvesBase = require("../setATH/LlanowarElves");

class LlanowarElves extends LlanowarElvesBase {
  constructor(game) {
    super(game, "Llanowar Elves", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = LlanowarElves;
