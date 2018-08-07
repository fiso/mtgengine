"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PainSuffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Pain // Suffering", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = PainSuffering;
