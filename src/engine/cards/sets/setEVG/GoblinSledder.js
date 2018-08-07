"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSledder extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Sledder", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinSledder;
