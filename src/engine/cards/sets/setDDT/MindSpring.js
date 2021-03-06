"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindSpring extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Spring", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = MindSpring;
