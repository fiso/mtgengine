"use strict";
const Constants = require ("../../../Constants");
const AncientCravingBase = require("../setC15/AncientCraving");

class AncientCraving extends AncientCravingBase {
  constructor(game) {
    super(game, "Ancient Craving", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = AncientCraving;
