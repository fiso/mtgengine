"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Galvanoth extends Card {
  constructor(game) {
    super(game, "Galvanoth", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Galvanoth;
