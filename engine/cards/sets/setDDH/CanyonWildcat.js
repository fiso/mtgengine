"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CanyonWildcat extends Card {
  constructor(game) {
    super(game, "Canyon Wildcat", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = CanyonWildcat;
