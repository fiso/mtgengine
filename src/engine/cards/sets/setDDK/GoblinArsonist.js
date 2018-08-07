"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinArsonist extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Arsonist", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = GoblinArsonist;
