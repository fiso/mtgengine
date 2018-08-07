"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setC18/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Forest;
