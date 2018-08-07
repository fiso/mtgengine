"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissasJudgment extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa's Judgment", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = NissasJudgment;
