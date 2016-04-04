"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThirstforKnowledge extends Card {
  constructor(game) {
    super(game, "Thirst for Knowledge", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ThirstforKnowledge;
