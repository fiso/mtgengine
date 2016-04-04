"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MorgueToad extends Card {
  constructor(game) {
    super(game, "Morgue Toad", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = MorgueToad;
