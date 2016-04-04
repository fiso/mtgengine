"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Undermine extends Card {
  constructor(game) {
    super(game, "Undermine", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Undermine;
