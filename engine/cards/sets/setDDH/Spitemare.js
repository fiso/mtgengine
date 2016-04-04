"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spitemare extends UnimplementedCard {
  constructor(game) {
    super(game, "Spitemare", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Spitemare;
