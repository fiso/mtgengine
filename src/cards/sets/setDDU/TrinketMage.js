"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrinketMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Trinket Mage", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = TrinketMage;
