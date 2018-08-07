"use strict";
const Constants = require ("../../../Constants");
const SerratedArrowsBase = require("../setGVL/SerratedArrows");

class SerratedArrows extends SerratedArrowsBase {
  constructor (game) {
    super(game, "Serrated Arrows", "World Championship Decks 1997", "WC97");
  }
}

module.exports = SerratedArrows;
