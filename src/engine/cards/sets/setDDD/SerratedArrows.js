"use strict";
const Constants = require ("../../../Constants");
const SerratedArrowsBase = require("../setGVL/SerratedArrows");

class SerratedArrows extends SerratedArrowsBase {
  constructor (game) {
    super(game, "Serrated Arrows", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = SerratedArrows;
