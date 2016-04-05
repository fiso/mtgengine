"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Moroii extends UnimplementedCard {
  constructor(game) {
    super(game, "Moroii", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Moroii;
