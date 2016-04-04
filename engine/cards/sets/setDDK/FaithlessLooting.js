"use strict";
const Constants = require ("../../../Constants");
const FaithlessLootingBase = require("../setC14/FaithlessLooting");

class FaithlessLooting extends FaithlessLootingBase {
  constructor(game) {
    super(game, "Faithless Looting", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = FaithlessLooting;
