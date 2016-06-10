"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireBarrage extends UnimplementedCard {
  constructor (game) {
    super(game, "Spire Barrage", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SpireBarrage;
