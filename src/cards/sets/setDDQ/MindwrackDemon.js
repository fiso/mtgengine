"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindwrackDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindwrack Demon", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MindwrackDemon;
