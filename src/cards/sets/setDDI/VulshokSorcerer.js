"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulshokSorcerer extends UnimplementedCard {
  constructor(game) {
    super(game, "Vulshok Sorcerer", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VulshokSorcerer;
