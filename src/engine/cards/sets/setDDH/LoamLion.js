"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoamLion extends UnimplementedCard {
  constructor (game) {
    super(game, "Loam Lion", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = LoamLion;
