"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianCorrupter extends UnimplementedCard {
  constructor (game) {
    super(game, "Viridian Corrupter", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = ViridianCorrupter;
