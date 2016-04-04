"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Elemental extends Card {
  constructor(game) {
    super(game, "Elemental", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Elemental;
