"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrevasCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Treva's Charm", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = TrevasCharm;
