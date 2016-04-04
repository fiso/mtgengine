"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianNegator extends Card {
  constructor(game) {
    super(game, "Phyrexian Negator", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianNegator;
