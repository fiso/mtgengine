"use strict";
const Constants = require ("../../../Constants");
const LlanowarElvesBase = require("../setATH/LlanowarElves");

class LlanowarElves extends LlanowarElvesBase {
  constructor (game) {
    super(game, "Llanowar Elves", "Fourth Edition", "4ED");
  }
}

module.exports = LlanowarElves;
