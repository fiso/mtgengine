"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildNacatl extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Nacatl", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = WildNacatl;
