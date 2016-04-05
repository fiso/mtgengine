"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanyonWildcat extends UnimplementedCard {
  constructor(game) {
    super(game, "Canyon Wildcat", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = CanyonWildcat;
