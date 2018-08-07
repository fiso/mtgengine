"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IgneousPouncer extends UnimplementedCard {
  constructor (game) {
    super(game, "Igneous Pouncer", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = IgneousPouncer;
