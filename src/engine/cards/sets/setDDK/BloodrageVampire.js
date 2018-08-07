"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodrageVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodrage Vampire", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = BloodrageVampire;
