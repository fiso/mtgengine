"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GalepowderMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Galepowder Mage", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = GalepowderMage;
