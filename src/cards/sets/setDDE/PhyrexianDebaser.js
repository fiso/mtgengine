"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianDebaser extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Debaser", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianDebaser;
