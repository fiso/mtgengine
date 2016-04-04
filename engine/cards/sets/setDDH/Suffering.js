"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Suffering extends Card {
  constructor(game) {
    super(game, "Suffering", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Suffering;
