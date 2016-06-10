"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Forest;
