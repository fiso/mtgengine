"use strict";
const Constants = require ("../../../Constants");
const LlanowarElvesBase = require("../setATH/LlanowarElves");

class LlanowarElves extends LlanowarElvesBase {
  constructor(game) {
    super(game, "Llanowar Elves", "Limited Edition Beta", "LEB");
  }
}

module.exports = LlanowarElves;
