"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pain extends UnimplementedCard {
  constructor (game) {
    super(game, "Pain", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Pain;
