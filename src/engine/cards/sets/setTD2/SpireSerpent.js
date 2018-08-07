"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireSerpent extends UnimplementedCard {
  constructor (game) {
    super(game, "Spire Serpent", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SpireSerpent;
