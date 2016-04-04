"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampiresBite extends UnimplementedCard {
  constructor(game) {
    super(game, "Vampire's Bite", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VampiresBite;
