"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VithianStinger extends Card {
  constructor(game) {
    super(game, "Vithian Stinger", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VithianStinger;
