"use strict";
const Constants = require ("../../../Constants");
const RagingGoblinBase = require("../setATH/RagingGoblin");

class RagingGoblin extends RagingGoblinBase {
  constructor(game) {
    super(game, "Raging Goblin", "Ninth Edition", "9ED");
  }
}

module.exports = RagingGoblin;
