"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagmaSpray extends Card {
  constructor(game) {
    super(game, "Magma Spray", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = MagmaSpray;
