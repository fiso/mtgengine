"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Browbeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Browbeat", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Browbeat;
