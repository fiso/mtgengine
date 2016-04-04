"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildNacatl extends Card {
  constructor(game) {
    super(game, "Wild Nacatl", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = WildNacatl;
