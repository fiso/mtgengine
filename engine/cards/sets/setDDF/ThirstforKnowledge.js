"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThirstforKnowledge extends UnimplementedCard {
  constructor(game) {
    super(game, "Thirst for Knowledge", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ThirstforKnowledge;
