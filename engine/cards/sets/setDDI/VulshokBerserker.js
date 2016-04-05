"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulshokBerserker extends UnimplementedCard {
  constructor(game) {
    super(game, "Vulshok Berserker", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VulshokBerserker;
