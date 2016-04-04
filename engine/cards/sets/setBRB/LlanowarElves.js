"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LlanowarElvesBase = require("../setATH/LlanowarElves.js");

class LlanowarElves extends LlanowarElvesBase {
  constructor(game) {
    super(game, "Llanowar Elves", "Battle Royale Box Set", "BRB");
  }
}

module.exports = LlanowarElves;
