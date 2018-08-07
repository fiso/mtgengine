"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TriumphoftheHordes extends UnimplementedCard {
  constructor (game) {
    super(game, "Triumph of the Hordes", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = TriumphoftheHordes;
