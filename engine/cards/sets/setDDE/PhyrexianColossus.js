"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianColossus extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Colossus", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianColossus;
