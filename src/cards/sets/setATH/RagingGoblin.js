"use strict";
const Constants = require ("../../../Constants");
const RagingGoblinBase = require("../setMTGA/RagingGoblin");

class RagingGoblin extends RagingGoblinBase {
  constructor (game) {
    super(game, "Raging Goblin", "Anthologies", "ATH");
  }
}

module.exports = RagingGoblin;
