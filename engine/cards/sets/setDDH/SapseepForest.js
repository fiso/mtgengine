"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SapseepForest extends UnimplementedCard {
  constructor(game) {
    super(game, "Sapseep Forest", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SapseepForest;
