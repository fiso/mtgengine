"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevilsPlay extends UnimplementedCard {
  constructor (game) {
    super(game, "Devil's Play", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = DevilsPlay;
