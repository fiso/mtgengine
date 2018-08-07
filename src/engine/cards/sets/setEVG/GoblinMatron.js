"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMatron extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Matron", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinMatron;
