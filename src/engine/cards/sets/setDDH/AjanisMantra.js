"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjanisMantra extends UnimplementedCard {
  constructor (game) {
    super(game, "Ajani's Mantra", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AjanisMantra;
