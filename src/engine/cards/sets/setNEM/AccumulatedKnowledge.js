"use strict";
const Constants = require ("../../../Constants");
const AccumulatedKnowledgeBase = require("../setA25/AccumulatedKnowledge");

class AccumulatedKnowledge extends AccumulatedKnowledgeBase {
  constructor (game) {
    super(game, "Accumulated Knowledge", "Nemesis", "NEM");
  }
}

module.exports = AccumulatedKnowledge;
