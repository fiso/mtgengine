"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RithsCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Rith's Charm", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = RithsCharm;
