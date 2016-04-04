"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinSledderBase = require("../setDD3_EVG/GoblinSledder.js");

class GoblinSledder extends GoblinSledderBase {
  constructor(game) {
    super(game, "Goblin Sledder", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinSledder;
