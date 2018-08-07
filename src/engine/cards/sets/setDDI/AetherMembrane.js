"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherMembrane extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Membrane", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = AetherMembrane;
