"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianNegator extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Negator", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianNegator;
