"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianDebaser extends Card {
  constructor(game) {
    super(game, "Phyrexian Debaser", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianDebaser;
