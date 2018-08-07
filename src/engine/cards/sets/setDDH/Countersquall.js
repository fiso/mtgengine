"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Countersquall extends UnimplementedCard {
  constructor (game) {
    super(game, "Countersquall", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Countersquall;
