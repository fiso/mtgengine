"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Moroii extends Card {
  constructor(game) {
    super(game, "Moroii", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Moroii;
