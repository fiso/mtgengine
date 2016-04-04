"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KilnFiend extends Card {
  constructor(game) {
    super(game, "Kiln Fiend", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = KilnFiend;
