"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setC18/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = Forest;
