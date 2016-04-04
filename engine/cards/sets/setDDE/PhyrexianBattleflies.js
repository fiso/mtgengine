"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianBattleflies extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Battleflies", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianBattleflies;
