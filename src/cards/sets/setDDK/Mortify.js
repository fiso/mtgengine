"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mortify extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortify", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Mortify;
