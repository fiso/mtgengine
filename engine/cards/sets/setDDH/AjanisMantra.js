"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AjanisMantra extends Card {
  constructor(game) {
    super(game, "Ajani's Mantra", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = AjanisMantra;
