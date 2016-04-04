"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WoollyThoctar extends Card {
  constructor(game) {
    super(game, "Woolly Thoctar", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = WoollyThoctar;
