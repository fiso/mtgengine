"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BruteStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Brute Strength", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = BruteStrength;
