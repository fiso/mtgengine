"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianBroodlings extends Card {
  constructor(game) {
    super(game, "Phyrexian Broodlings", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianBroodlings;
