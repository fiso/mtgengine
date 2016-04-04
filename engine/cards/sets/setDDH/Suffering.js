"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Suffering extends UnimplementedCard {
  constructor(game) {
    super(game, "Suffering", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Suffering;
