"use strict";
const Constants = require ("../../../Constants");
const RagingGoblinBase = require("../setATH/RagingGoblin");

class RagingGoblin extends RagingGoblinBase {
  constructor (game) {
    super(game, "Raging Goblin", "Seventh Edition", "7ED");
  }
}

module.exports = RagingGoblin;
