"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinChieftain extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Chieftain", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinChieftain;
