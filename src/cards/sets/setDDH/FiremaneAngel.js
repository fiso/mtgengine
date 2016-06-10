"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiremaneAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Firemane Angel", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = FiremaneAngel;
