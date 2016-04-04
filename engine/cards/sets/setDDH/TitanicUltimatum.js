"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitanicUltimatum extends Card {
  constructor(game) {
    super(game, "Titanic Ultimatum", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = TitanicUltimatum;
