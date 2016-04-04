"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianDefiler extends Card {
  constructor(game) {
    super(game, "Phyrexian Defiler", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianDefiler;
