"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PriestofGix extends Card {
  constructor(game) {
    super(game, "Priest of Gix", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PriestofGix;
