"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Gold Myr", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = GoldMyr;
