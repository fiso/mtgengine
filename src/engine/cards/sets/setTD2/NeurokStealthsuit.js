"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokStealthsuit extends UnimplementedCard {
  constructor (game) {
    super(game, "Neurok Stealthsuit", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = NeurokStealthsuit;
