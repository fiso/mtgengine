"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuirionElves extends UnimplementedCard {
  constructor (game) {
    super(game, "Quirion Elves", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = QuirionElves;
