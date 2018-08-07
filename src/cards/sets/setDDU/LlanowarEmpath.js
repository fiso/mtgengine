"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LlanowarEmpath extends UnimplementedCard {
  constructor (game) {
    super(game, "Llanowar Empath", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = LlanowarEmpath;
