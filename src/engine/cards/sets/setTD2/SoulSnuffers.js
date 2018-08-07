"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSnuffers extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Snuffers", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SoulSnuffers;
