"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrophyMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Trophy Mage", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = TrophyMage;
