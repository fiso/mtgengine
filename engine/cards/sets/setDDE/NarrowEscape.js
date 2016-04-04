"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NarrowEscape extends Card {
  constructor(game) {
    super(game, "Narrow Escape", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = NarrowEscape;
