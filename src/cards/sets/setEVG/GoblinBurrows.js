"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBurrows extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Burrows", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinBurrows;
