"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kraken extends Card {
  constructor(game) {
    super(game, "Kraken", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Kraken;
