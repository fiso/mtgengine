"use strict";
const Constants = require ("../../../Constants");
const ThirstforKnowledgeBase = require("../setC18/ThirstforKnowledge");

class ThirstforKnowledge extends ThirstforKnowledgeBase {
  constructor (game) {
    super(game, "Thirst for Knowledge", "Friday Night Magic 2008", "F08");
  }
}

module.exports = ThirstforKnowledge;
