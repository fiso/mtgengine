"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Silver Myr", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SilverMyr;
