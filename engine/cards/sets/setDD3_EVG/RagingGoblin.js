"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RagingGoblinBase = require("../setATH/RagingGoblin.js");

class RagingGoblin extends RagingGoblinBase {
  constructor(game) {
    super(game, "Raging Goblin", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = RagingGoblin;
