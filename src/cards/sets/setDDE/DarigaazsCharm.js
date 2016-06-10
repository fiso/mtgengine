"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarigaazsCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Darigaaz's Charm", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = DarigaazsCharm;
