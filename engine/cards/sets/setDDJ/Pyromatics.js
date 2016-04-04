"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pyromatics extends Card {
  constructor(game) {
    super(game, "Pyromatics", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Pyromatics;
