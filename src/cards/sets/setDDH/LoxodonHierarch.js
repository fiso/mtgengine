"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoxodonHierarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Loxodon Hierarch", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = LoxodonHierarch;
