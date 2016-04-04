"use strict";
const Constants = require ("../../../Constants");
const RagingGoblinBase = require("../setATH/RagingGoblin");

class RagingGoblin extends RagingGoblinBase {
  constructor(game) {
    super(game, "Raging Goblin", "Eighth Edition", "8ED");
  }
}

module.exports = RagingGoblin;
