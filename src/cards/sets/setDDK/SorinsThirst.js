"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorinsThirst extends UnimplementedCard {
  constructor(game) {
    super(game, "Sorin's Thirst", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SorinsThirst;
