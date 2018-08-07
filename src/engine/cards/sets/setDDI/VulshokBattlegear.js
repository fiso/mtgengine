"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulshokBattlegear extends UnimplementedCard {
  constructor (game) {
    super(game, "Vulshok Battlegear", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = VulshokBattlegear;
