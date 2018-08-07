"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContagionClasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Contagion Clasp", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = ContagionClasp;
