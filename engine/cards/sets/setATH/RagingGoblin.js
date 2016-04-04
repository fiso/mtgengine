"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagingGoblin extends Card {
  constructor(game) {
    super(game, "Raging Goblin", "Anthologies", "ATH");
  }
}

module.exports = RagingGoblin;
