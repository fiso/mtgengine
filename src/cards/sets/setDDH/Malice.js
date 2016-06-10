"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Malice extends UnimplementedCard {
  constructor (game) {
    super(game, "Malice", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Malice;
