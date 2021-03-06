"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Goon", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinGoon;
