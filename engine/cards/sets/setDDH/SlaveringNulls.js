"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlaveringNulls extends Card {
  constructor(game) {
    super(game, "Slavering Nulls", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SlaveringNulls;
