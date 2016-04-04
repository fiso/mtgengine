"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CodexShredder extends Card {
  constructor(game) {
    super(game, "Codex Shredder", "Return to Ravnica", "RTR");
  }
}

module.exports = CodexShredder;
