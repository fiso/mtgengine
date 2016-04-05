"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spite extends UnimplementedCard {
  constructor(game) {
    super(game, "Spite", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Spite;
