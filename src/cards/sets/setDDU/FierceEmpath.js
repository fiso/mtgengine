"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FierceEmpath extends UnimplementedCard {
  constructor (game) {
    super(game, "Fierce Empath", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = FierceEmpath;
