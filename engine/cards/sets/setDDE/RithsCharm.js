"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RithsCharm extends Card {
  constructor(game) {
    super(game, "Rith's Charm", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = RithsCharm;
