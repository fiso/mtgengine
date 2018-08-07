"use strict";
const Constants = require ("../../../Constants");
const AccumulatedKnowledgeBase = require("../setA25/AccumulatedKnowledge");

class AccumulatedKnowledge extends AccumulatedKnowledgeBase {
  constructor (game) {
    super(game, "Accumulated Knowledge", "Friday Night Magic 2004", "F04");
  }
}

module.exports = AccumulatedKnowledge;
