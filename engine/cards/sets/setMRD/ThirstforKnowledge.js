"use strict";
const Constants = require ("../../../Constants");
const ThirstforKnowledgeBase = require("../setDDF/ThirstforKnowledge");

class ThirstforKnowledge extends ThirstforKnowledgeBase {
  constructor(game) {
    super(game, "Thirst for Knowledge", "Mirrodin", "MRD");
  }
}

module.exports = ThirstforKnowledge;
