"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CacheRaiders extends UnimplementedCard {
  constructor (game) {
    super(game, "Cache Raiders", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = CacheRaiders;
