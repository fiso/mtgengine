"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CacheRaiders extends Card {
  constructor(game) {
    super(game, "Cache Raiders", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = CacheRaiders;
