"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientCravingBase = require("../setC15/AncientCraving.js");

class AncientCraving extends AncientCravingBase {
  constructor(game) {
    super(game, "Ancient Craving", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = AncientCraving;
