"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianJuggernaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Juggernaut", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = PhyrexianJuggernaut;
