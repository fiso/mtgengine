"use strict";
const Constants = require ("../../../Constants");
const LlanowarElvesBase = require("../setM19/LlanowarElves");

class LlanowarElves extends LlanowarElvesBase {
  constructor (game) {
    super(game, "Llanowar Elves", "World Championship Decks 2002", "WC02");
  }
}

module.exports = LlanowarElves;
