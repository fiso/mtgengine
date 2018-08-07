"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setC18/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = Forest;
