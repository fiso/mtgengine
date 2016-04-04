"use strict";
const Constants = require ("../../../Constants");
const LlanowarElvesBase = require("../setATH/LlanowarElves");

class LlanowarElves extends LlanowarElvesBase {
  constructor(game) {
    super(game, "Llanowar Elves", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = LlanowarElves;
