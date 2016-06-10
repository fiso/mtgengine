"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianDefiler extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Defiler", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianDefiler;
