"use strict";
const Constants = require ("../../../Constants");
const AccumulatedKnowledgeBase = require("../setA25/AccumulatedKnowledge");

class AccumulatedKnowledge extends AccumulatedKnowledgeBase {
  constructor (game) {
    super(game, "Accumulated Knowledge", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = AccumulatedKnowledge;
