"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrideofLions extends UnimplementedCard {
  constructor (game) {
    super(game, "Pride of Lions", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = PrideofLions;
