"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Decompose extends UnimplementedCard {
  constructor(game) {
    super(game, "Decompose", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Decompose;
