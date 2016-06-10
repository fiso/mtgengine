"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesmericFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesmeric Fiend", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = MesmericFiend;
