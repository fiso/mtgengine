"use strict";
const Constants = require ("../../../Constants");
const LlanowarElvesBase = require("../setATH/LlanowarElves");

class LlanowarElves extends LlanowarElvesBase {
  constructor (game) {
    super(game, "Llanowar Elves", "Magic 2011", "M11");
  }
}

module.exports = LlanowarElves;
