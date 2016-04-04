"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolgariThug extends Card {
  constructor(game) {
    super(game, "Golgari Thug", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = GolgariThug;
