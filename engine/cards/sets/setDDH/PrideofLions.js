"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrideofLions extends Card {
  constructor(game) {
    super(game, "Pride of Lions", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = PrideofLions;
