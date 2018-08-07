"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyriteSpellbomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyrite Spellbomb", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = PyriteSpellbomb;
