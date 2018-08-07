"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarisisTwinclaws extends UnimplementedCard {
  constructor (game) {
    super(game, "Marisi's Twinclaws", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = MarisisTwinclaws;
