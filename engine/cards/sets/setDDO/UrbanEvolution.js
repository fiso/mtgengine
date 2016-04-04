"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrbanEvolution extends Card {
  constructor(game) {
    super(game, "Urban Evolution", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = UrbanEvolution;
