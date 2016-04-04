"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor(game) {
    super(game, "Forest", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Forest;
