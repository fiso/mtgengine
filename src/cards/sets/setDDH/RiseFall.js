"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiseFall extends UnimplementedCard {
  constructor (game) {
    super(game, "Rise // Fall", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = RiseFall;
