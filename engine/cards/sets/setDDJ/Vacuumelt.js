"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vacuumelt extends Card {
  constructor(game) {
    super(game, "Vacuumelt", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Vacuumelt;
