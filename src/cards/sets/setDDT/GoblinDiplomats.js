"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinDiplomats extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Diplomats", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinDiplomats;
