"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Doomgape extends Card {
  constructor(game) {
    super(game, "Doomgape", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Doomgape;
