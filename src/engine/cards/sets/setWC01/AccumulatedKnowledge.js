"use strict";
const Constants = require ("../../../Constants");
const AccumulatedKnowledgeBase = require("../setA25/AccumulatedKnowledge");

class AccumulatedKnowledge extends AccumulatedKnowledgeBase {
  constructor (game) {
    super(game, "Accumulated Knowledge", "World Championship Decks 2001", "WC01");
  }
}

module.exports = AccumulatedKnowledge;
