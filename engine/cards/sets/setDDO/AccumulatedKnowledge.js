"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AccumulatedKnowledge extends Card {
  constructor(game) {
    super(game, "Accumulated Knowledge", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = AccumulatedKnowledge;
