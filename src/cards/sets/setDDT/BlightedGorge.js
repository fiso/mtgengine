"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedGorge extends UnimplementedCard {
  constructor (game) {
    super(game, "Blighted Gorge", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = BlightedGorge;
