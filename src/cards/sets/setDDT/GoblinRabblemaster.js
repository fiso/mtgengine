"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRabblemaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Rabblemaster", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinRabblemaster;
