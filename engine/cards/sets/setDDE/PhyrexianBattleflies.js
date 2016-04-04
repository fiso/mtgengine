"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianBattleflies extends Card {
  constructor(game) {
    super(game, "Phyrexian Battleflies", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianBattleflies;
