"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Explore extends Card {
  constructor(game) {
    super(game, "Explore", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Explore;
