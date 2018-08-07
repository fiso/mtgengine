"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unmake extends UnimplementedCard {
  constructor (game) {
    super(game, "Unmake", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Unmake;
