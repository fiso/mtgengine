"use strict";
const Constants = require ("../../../Constants");
const FaithlessLootingBase = require("../setCM2/FaithlessLooting");

class FaithlessLooting extends FaithlessLootingBase {
  constructor (game) {
    super(game, "Faithless Looting", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = FaithlessLooting;
