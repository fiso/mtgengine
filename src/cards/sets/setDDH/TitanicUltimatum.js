"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitanicUltimatum extends UnimplementedCard {
  constructor (game) {
    super(game, "Titanic Ultimatum", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = TitanicUltimatum;
