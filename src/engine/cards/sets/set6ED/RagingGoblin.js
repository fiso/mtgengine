"use strict";
const Constants = require ("../../../Constants");
const RagingGoblinBase = require("../setMTGA/RagingGoblin");

class RagingGoblin extends RagingGoblinBase {
  constructor (game) {
    super(game, "Raging Goblin", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RagingGoblin;
