"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AccumulatedKnowledge extends UnimplementedCard {
  constructor(game) {
    super(game, "Accumulated Knowledge", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = AccumulatedKnowledge;
