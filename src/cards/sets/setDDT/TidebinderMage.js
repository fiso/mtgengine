"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidebinderMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidebinder Mage", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = TidebinderMage;
