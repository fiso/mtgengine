"use strict";
const Constants = require ("../../../Constants");
const RagingGoblinBase = require("../setATH/RagingGoblin");

class RagingGoblin extends RagingGoblinBase {
  constructor(game) {
    super(game, "Raging Goblin", "Portal", "POR");
  }
}

module.exports = RagingGoblin;
