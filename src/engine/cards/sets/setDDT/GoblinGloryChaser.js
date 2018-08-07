"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGloryChaser extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Glory Chaser", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = GoblinGloryChaser;
