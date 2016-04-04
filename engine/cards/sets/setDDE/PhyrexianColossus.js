"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianColossus extends Card {
  constructor(game) {
    super(game, "Phyrexian Colossus", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianColossus;
