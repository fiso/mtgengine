"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherMembrane extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Membrane", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = AetherMembrane;
