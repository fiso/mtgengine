"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShamblingShell extends Card {
  constructor(game) {
    super(game, "Shambling Shell", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ShamblingShell;
