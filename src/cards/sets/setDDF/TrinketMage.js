"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrinketMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Trinket Mage", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TrinketMage;
