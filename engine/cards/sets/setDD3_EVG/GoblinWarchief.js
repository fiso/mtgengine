"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWarchief extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Warchief", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = GoblinWarchief;
