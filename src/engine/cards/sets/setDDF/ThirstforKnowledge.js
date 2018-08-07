"use strict";
const Constants = require ("../../../Constants");
const ThirstforKnowledgeBase = require("../setC18/ThirstforKnowledge");

class ThirstforKnowledge extends ThirstforKnowledgeBase {
  constructor (game) {
    super(game, "Thirst for Knowledge", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ThirstforKnowledge;
