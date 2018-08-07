"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCharbelcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Charbelcher", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinCharbelcher;
