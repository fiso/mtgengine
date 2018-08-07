"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelshapersGift extends UnimplementedCard {
  constructor (game) {
    super(game, "Steelshaper's Gift", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SteelshapersGift;
