"use strict";
const Constants = require ("../../../Constants");
const AncientCravingBase = require("../setA25/AncientCraving");

class AncientCraving extends AncientCravingBase {
  constructor (game) {
    super(game, "Ancient Craving", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = AncientCraving;
