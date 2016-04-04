"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Malice extends Card {
  constructor(game) {
    super(game, "Malice", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Malice;
