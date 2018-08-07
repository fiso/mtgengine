"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Myr", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = PlagueMyr;
