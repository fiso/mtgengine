"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarigaazsCharm extends Card {
  constructor(game) {
    super(game, "Darigaaz's Charm", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = DarigaazsCharm;
