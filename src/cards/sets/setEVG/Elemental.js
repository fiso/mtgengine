"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Elemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Elemental", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Elemental;
