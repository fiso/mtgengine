"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Goblin extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Goblin;
