"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolgariGermination extends Card {
  constructor(game) {
    super(game, "Golgari Germination", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariGermination;
