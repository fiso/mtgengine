"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanOasis extends Card {
  constructor(game) {
    super(game, "Shivan Oasis", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ShivanOasis;
