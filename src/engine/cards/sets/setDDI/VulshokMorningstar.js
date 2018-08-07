"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulshokMorningstar extends UnimplementedCard {
  constructor (game) {
    super(game, "Vulshok Morningstar", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VulshokMorningstar;
