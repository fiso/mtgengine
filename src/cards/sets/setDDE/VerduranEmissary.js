"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerduranEmissary extends UnimplementedCard {
  constructor(game) {
    super(game, "Verduran Emissary", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = VerduranEmissary;
