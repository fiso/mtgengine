"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TibalttheFiendBlooded extends UnimplementedCard {
  constructor (game) {
    super(game, "Tibalt, the Fiend-Blooded", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = TibalttheFiendBlooded;
