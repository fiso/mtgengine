"use strict";
const Constants = require ("../../../Constants");
const ThirstforKnowledgeBase = require("../setC18/ThirstforKnowledge");

class ThirstforKnowledge extends ThirstforKnowledgeBase {
  constructor (game) {
    super(game, "Thirst for Knowledge", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = ThirstforKnowledge;
