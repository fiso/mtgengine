"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkoftheVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Mark of the Vampire", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = MarkoftheVampire;
