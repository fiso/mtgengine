"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blightning extends UnimplementedCard {
  constructor(game) {
    super(game, "Blightning", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Blightning;
