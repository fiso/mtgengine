"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NarrowEscape extends UnimplementedCard {
  constructor (game) {
    super(game, "Narrow Escape", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = NarrowEscape;
