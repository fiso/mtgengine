"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorgueToad extends UnimplementedCard {
  constructor(game) {
    super(game, "Morgue Toad", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = MorgueToad;
