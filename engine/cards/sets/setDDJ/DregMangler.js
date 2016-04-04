"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DregMangler extends Card {
  constructor(game) {
    super(game, "Dreg Mangler", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = DregMangler;
