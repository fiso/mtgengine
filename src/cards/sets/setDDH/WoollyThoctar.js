"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoollyThoctar extends UnimplementedCard {
  constructor (game) {
    super(game, "Woolly Thoctar", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = WoollyThoctar;
