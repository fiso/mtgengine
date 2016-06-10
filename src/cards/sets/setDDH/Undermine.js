"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Undermine extends UnimplementedCard {
  constructor (game) {
    super(game, "Undermine", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Undermine;
