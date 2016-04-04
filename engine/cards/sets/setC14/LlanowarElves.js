"use strict";
const Constants = require ("../../../Constants");
const LlanowarElvesBase = require("../setATH/LlanowarElves");

class LlanowarElves extends LlanowarElvesBase {
  constructor(game) {
    super(game, "Llanowar Elves", "Commander 2014", "C14");
  }
}

module.exports = LlanowarElves;
