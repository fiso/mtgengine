"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinMime extends Card {
  constructor(game) {
    super(game, "Goblin Mime", "Arena League", "pARL");
  }
}

module.exports = GoblinMime;
