"use strict";
const Constants = require ("../../../Constants");
const LlanowarElvesBase = require("../setM19/LlanowarElves");

class LlanowarElves extends LlanowarElvesBase {
  constructor (game) {
    super(game, "Llanowar Elves", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = LlanowarElves;
