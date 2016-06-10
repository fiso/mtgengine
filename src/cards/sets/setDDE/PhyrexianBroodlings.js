"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianBroodlings extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Broodlings", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianBroodlings;
