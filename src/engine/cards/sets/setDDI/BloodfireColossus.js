"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodfireColossus extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodfire Colossus", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = BloodfireColossus;
