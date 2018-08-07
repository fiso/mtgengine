"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRingleader extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Ringleader", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinRingleader;
