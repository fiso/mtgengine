"use strict";
const Constants = require ("../../../Constants");
const AccumulatedKnowledgeBase = require("../setDDO/AccumulatedKnowledge");

class AccumulatedKnowledge extends AccumulatedKnowledgeBase {
  constructor (game) {
    super(game, "Accumulated Knowledge", "Friday Night Magic", "pFNM");
  }
}

module.exports = AccumulatedKnowledge;
