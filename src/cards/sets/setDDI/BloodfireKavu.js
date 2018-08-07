"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodfireKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodfire Kavu", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = BloodfireKavu;
