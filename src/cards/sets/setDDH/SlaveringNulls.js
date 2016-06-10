"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlaveringNulls extends UnimplementedCard {
  constructor (game) {
    super(game, "Slavering Nulls", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SlaveringNulls;
