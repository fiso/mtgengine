"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VithianStinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Vithian Stinger", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VithianStinger;
