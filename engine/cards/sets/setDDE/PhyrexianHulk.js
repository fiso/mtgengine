"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianHulk extends Card {
  constructor(game) {
    super(game, "Phyrexian Hulk", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianHulk;
