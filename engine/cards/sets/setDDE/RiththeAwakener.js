"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiththeAwakener extends Card {
  constructor(game) {
    super(game, "Rith, the Awakener", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = RiththeAwakener;
