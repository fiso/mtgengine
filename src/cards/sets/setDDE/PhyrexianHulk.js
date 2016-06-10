"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianHulk extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Hulk", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianHulk;
