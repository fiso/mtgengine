"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWardriver extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Wardriver", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinWardriver;
