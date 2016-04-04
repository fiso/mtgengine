"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GalepowderMage extends Card {
  constructor(game) {
    super(game, "Galepowder Mage", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = GalepowderMage;
