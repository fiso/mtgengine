"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spite extends Card {
  constructor(game) {
    super(game, "Spite", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Spite;
