"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriestofGix extends UnimplementedCard {
  constructor (game) {
    super(game, "Priest of Gix", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PriestofGix;
